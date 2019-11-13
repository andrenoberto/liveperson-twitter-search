const { Tweet, User } = require('../models');

const exclude = ['createdAt', 'updatedAt', 'userId'];
const userAttributes = [
  {
    model: User,
    as: 'user',
    attributes: [
      'id',
      'name',
      'profileImage',
      'screenName',
      'url',
    ],
  },
];
const orderByCreationDate = [
  ['timestamp', 'DESC'],
];

const createTweet = async tweet => {

  return await Tweet.findCreateFind({
    where: {
      id: tweet.id,
    },
    defaults: {
      ...tweet,
    }
  });
};

const findAll = async () => await Tweet.findAll({
  attributes: { exclude },
  include: userAttributes,
  order: orderByCreationDate,
});

module.exports = {
  createTweet,
  findAll,
};