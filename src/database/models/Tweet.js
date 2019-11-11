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
  replyCount: Sequelize.INTEGER,
  retweetCount: Sequelize.INTEGER,
  favoriteCount: Sequelize.INTEGER,
  timestamp: Sequelize.STRING,
});

Tweet.belongsTo(User);
User.hasMany(Tweet);

module.exports = Tweet;