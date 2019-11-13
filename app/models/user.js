'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id_str: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    screen_name: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
    profile_image_url_https: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Tweet);
  };
  return User;
};