const { Tweet, User } = require('../database/models');

const exclude = ['createdAt', 'updatedAt', 'userId'];
const include = [
  {
    model: User,
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

const createTweet = async newTweet => {
  const { user, ...tweet } = newTweet;


  return await Tweet.findCreateFind({
    where: {
      id_str: tweet.id_str,
    },
    defaults: {
      ...tweet,
      userIdStr: user.id_str,
    }
  });
};

const findAll = async () => await Tweet.findAll({
  attributes: [
    ['id_str', 'id'],
    ['reply_count', 'replyCount'],
    'text',
    ['retweet_count', 'retweetCount'],
    ['favorite_count', 'favoriteCounte'],
  ],
  include,
  order: orderByCreationDate,
});

module.exports = {
  createTweet,
  findAll,
};