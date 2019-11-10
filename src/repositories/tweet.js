const { Tweet, User } = require('../models');

const exclude = ['creadtedAt', 'updatedAt', 'userId'];
const include = [
  {
    model: User,
    attributes: [
      'id',
      'name',
      'screen_name',
      'profile_banner_url',
      'profile_image_url_https',
    ],
  },
];
const orderByCreationDate = [
  ['created_at', 'DESC'],
];

const createTweet = async tweet => {
  const {
    id,
    created_at,
    text,
    truncated,
    in_reply_to_status_id,
    in_reply_to_user_id,
    in_reply_to_screen_name,
    reply_count,
    retweet_count,
    favorite_count,
    user,
  } = tweet;

  await Tweet.create({
    id,
    created_at,
    text,
    truncated,
    in_reply_to_status_id,
    in_reply_to_user_id,
    in_reply_to_screen_name,
    reply_count,
    retweet_count,
    favorite_count,
    userId: user.id,
  });
};

const findAll = async () => await Tweet.findAll({
  attributes: {
    exclude,
  },
  include,
});

const isTweetInDatabase = async ({ id }) => {
  const tweet = await findTweet(id);

  return !tweet;
};

const findTweet = async id => await Tweet.findByPk(id);

const findTweetModels = async tweet => {
  const { id: tweetId, user: { id: userId } } = tweet;

  return await Promise.all([
    Tweet.findByPk(tweetId),
    User.findByPk(userId),
  ]);
};

module.exports = {
  createTweet,
  findAll,
  findTweet,
  findTweetModels,
  isTweetInDatabase,
};