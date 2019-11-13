'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    screenName: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
    profileImage: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Tweet);
  };
  return User;
};