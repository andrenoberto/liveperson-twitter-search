const Sequelize = require('sequelize');

const database = require('../database');

const User = database.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  screenName: Sequelize.STRING,
  location: Sequelize.STRING,
  description: Sequelize.STRING,
  url: Sequelize.STRING,
  verified: Sequelize.BOOLEAN,
  profileImage: Sequelize.STRING,
});

module.exports = User;