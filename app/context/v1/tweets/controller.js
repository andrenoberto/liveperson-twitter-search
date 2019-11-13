const { TwitterService } = require('../../../services');
const { TweetRepository, UserRepository } = require('../../../repositories');

const getTweets = async (req, res) => {
  const { query } = req;
  const {
    statuses,
    search_metadata: {
      next_results: nextResults,
    },
  } = await TwitterService.searchTweets(query);

  await Promise.all(statuses.map(addTweet));
  const tweets = await findAllTweets();

  res.json({
    searchMetadata: {
      nextResults,
      count: tweets.length,
    },
    tweets,
  });
};

const findAllTweets = async () => await TweetRepository.findAll();

const addTweet = async newTweet => {
  const tweet = getNormalizedTweet(newTweet);
  const user = getNormalizedUser(newTweet);
 
  await UserRepository.createUser(user);
  await TweetRepository.createTweet(tweet);
};

const getNormalizedTweet = tweet => ({
  id: tweet['id_str'],
  userId: tweet['user']['id_str'],
  text: tweet['text'],
  replyCount: tweet['reply_count'],
  retweetCount: tweet['retweet_count'],
  favoriteCount: tweet['favorite_count'],
  timestamp: tweet['created_at'],
});

const getNormalizedUser = tweet => ({
  id: tweet['user']['id_str'],
  description: tweet['user']['description'],
  location: tweet['user']['location'],
  name: tweet['user']['name'],
  profileImage: tweet['user']['profile_image_url_https'],
  screenName: tweet['user']['screen_name'],
  url: tweet['user']['url'],
  verified: tweet['user']['verified'],
});

module.exports = {
  getTweets,
};