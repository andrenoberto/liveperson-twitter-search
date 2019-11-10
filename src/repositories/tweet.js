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

const createTweet = async tweet => {
  const {
    id,
    text,
    truncated,
    in_reply_to_status_id,
    in_reply_to_user_id,
    in_reply_to_screen_name,
    reply_count,
    retweet_count,
    favorite_count,
    user
  } = tweet;
};