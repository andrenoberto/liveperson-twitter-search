const { TwitterService } = require('../../../services');
const { TweetRepository, UserRepository } = require('../../../repositories');

const getTweets = async (req, res) => {
  const { query } =  req;
  const { statuses, search_metadata: { count } } = await TwitterService.searchTweets(query);

  try {
    await Promise.all(statuses.map(addTweet));
  } catch (err) {
    handleError(err);
  }

  const tweets = await findAllTweets();

  res.json(tweets);
};

const addTweet = async newTweet => {
  const [tweet, user] = await TweetRepository.findTweetModels(newTweet);

  if (tweet) {
    return;
  }

  if (!user) {
    await UserRepository.createUser(newTweet.user);
  }

  await TweetRepository.createTweet(newTweet);
};

const findAllTweets = async () => await TweetRepository.findAll();

const handleError = err => {
  if (err.name = 'SequelizeUniqueConstraintError') {
    console.error('Value already exists');
  }
};

const getErrorMessagesFromSequelize = err => {
  const { errors } = err;

  return errors ? {
    errors: errors.map(({ message }) => ({ message })),
  } : {};
};

module.exports = {
  getTweets,
};