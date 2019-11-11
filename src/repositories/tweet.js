const { Tweet, User } = require('../database/models');

const exclude = ['createdAt', 'updatedAt', 'userId'];
const include = [
  {
    model: User,
    attributes: [
      'id',
      'name',
      'screenName',
      'profileImage',
    ],
  },
];
const orderByCreationDate = [
  ['timestamp', 'DESC'],
];

const createTweet = async newTweet => {
  const { user, ...tweet } = getNormalizedTweet(newTweet);


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

const getNormalizedTweet = tweet => {
  const {
    id,
    text,
    truncated,
    reply_count: replyCount,
    retweet_count: retweetCount,
    favorite_count: favoriteCount,
    created_at: timestamp,
    user,
  } = tweet;

  return {
    id,
    text,
    truncated,
    replyCount,
    retweetCount,
    favoriteCount,
    timestamp,
    user,
  };
}

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