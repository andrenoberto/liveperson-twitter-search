const { Tweet, User } = require('../models');

const tweetAttributes = [
  ['id_str', 'id'],
  'text',
  ['reply_count', 'replyCount'],
  ['retweet_count', 'retweetCount'],
  ['favorite_count', 'favoriteCount'],
  ['created_at', 'createdAt'],
];
const userAttributes = [
  {
    model: User,
    as: 'user',
    attributes: [
      ['id_str', 'id'],
      'name',
      ['profile_image_url_https', 'profileImage'],
      ['screen_name', 'screenName'],
      'url',
    ],
  },
];
const orderByCreationDate = [
  ['created_at', 'DESC'],
];

const createTweet = async tweet => {
  const { user } = tweet;

  return await Tweet.findCreateFind({
    where: {
      id_str: tweet.id_str,
    },
    defaults: {
      ...tweet,
      user_id_str: user.id_str,
    }
  });
}

const findAll = async () => await Tweet.findAll({
  attributes: tweetAttributes,
  include: userAttributes,
  order: orderByCreationDate,
});

module.exports = {
  createTweet,
  findAll,
};