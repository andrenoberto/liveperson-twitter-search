const Sequelize = require('sequelize');

const database = require('../database');

const User = database.define('user', {
  id_str: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  screen_name: Sequelize.STRING,
  location: Sequelize.STRING,
  description: Sequelize.STRING,
  url: Sequelize.STRING,
  verified: Sequelize.BOOLEAN,
  profile_image_url_https: Sequelize.STRING,
});

module.exports = User;