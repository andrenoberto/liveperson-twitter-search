'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    userId: DataTypes.STRING,
    text: DataTypes.STRING,
    replyCount: DataTypes.NUMBER,
    retweetCount: DataTypes.NUMBER,
    favoriteCount: DataTypes.NUMBER,
    timestamp: DataTypes.STRING
  }, {});
  Tweet.associate = function (models) {
    Tweet.belongsTo(models.User, { as: 'user' });
  };
  return Tweet;
};