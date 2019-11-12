const Sequelize = require('sequelize');

const database = require('../database');
const User = require('./User');

const Tweet = database.define('tweet', {
  id_str: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  text: Sequelize.STRING,
  truncated: Sequelize.BOOLEAN,
  reply_count: Sequelize.INTEGER,
  retweet_count: Sequelize.INTEGER,
  favorite_count: Sequelize.INTEGER,
  created_at: Sequelize.STRING,
});

Tweet.belongsTo(User);
User.hasMany(Tweet);

module.exports = Tweet;