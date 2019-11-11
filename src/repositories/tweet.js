const { Tweet, User } = require('../database/models');

const exclude = ['createdAt', 'updatedAt', 'userId'];
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

const createTweet = async newTweet => {
  const { user, ...tweet } = newTweet;

  return await Tweet.findCreateFind({
    where: {
      id: tweet.id,
    },
    defaults: {
      ...tweet,
      userId: user.id,
    }
  });
};

const findAll = async () => await Tweet.findAll({
  attributes: {
    exclude,
  },
  include,
  order: orderByCreationDate,
});

module.exports = {
  createTweet,
  findAll,
};