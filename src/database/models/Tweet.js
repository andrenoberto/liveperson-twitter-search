const Sequelize = require('sequelize');

const database = require('../database');
const User = require('./User');

const Tweet = database.define('tweet', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  text: Sequelize.STRING,
  truncated: Sequelize.BOOLEAN,
  in_reply_to_status_id: Sequelize.INTEGER,
  in_reply_to_user_id: Sequelize.INTEGER,
  in_reply_to_screen_name:  Sequelize.STRING,
  reply_count: Sequelize.INTEGER,
  retweet_count: Sequelize.INTEGER,
  favorite_count: Sequelize.INTEGER,
  created_at: Sequelize.STRING,
});

Tweet.belongsTo(User);
User.hasMany(Tweet);

module.exports = Tweet;