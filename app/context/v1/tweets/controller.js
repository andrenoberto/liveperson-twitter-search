const { throwSequelizeError } = require('../../../helpers');
const { TwitterService } = require('../../../services');
const { TweetRepository, UserRepository } = require('../../../repositories');

const getTweets = async (req, res, next) => {
  try {
    const { query } = req;
    const {
      statuses,
      search_metadata: {
        next_results: nextResults,
      },
    } = await TwitterService.searchTweets(query);

    await Promise.all(statuses.map(addTweet));
    const tweets = await TweetRepository.findAll();

    res.json({
      searchMetadata: {
        nextResults,
        count: tweets.length,
      },
      tweets,
    });
  } catch (err) {
    next(err);
  }
};

const addTweet = async tweet => {
  try {
    await UserRepository.createUser(tweet.user);
    await TweetRepository.createTweet(tweet);
  } catch (err) {
    throwSequelizeError(err)
  }
};

module.exports = {
  getTweets,
};