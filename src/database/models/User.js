const Sequelize = require('sequelize');

const database = require('../database');

const User = database.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  screen_name: Sequelize.STRING,
  location: Sequelize.STRING,
  description: Sequelize.STRING,
  verified: Sequelize.BOOLEAN,
  profile_banner_url: Sequelize.STRING,
  profile_image_url_https: Sequelize.STRING,
});

module.exports = User;