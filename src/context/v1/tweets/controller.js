const { TwitterService } = require('../../../services');
const { TweetRepository, UserRepository } = require('../../../repositories');

const getTweets = async (req, res) => {
  const { query } =  req;
  const { statuses } = await TwitterService.searchTweets(query);

  await Promise.all(statuses.map(addTweet));
  const tweets = await findAllTweets();

  res.json(tweets);
};

const addTweet = async newTweet => {
  await UserRepository.createUser(newTweet.user);
  await TweetRepository.createTweet(newTweet);
};

const findAllTweets = async () => await TweetRepository.findAll();

module.exports = {
  getTweets,
};