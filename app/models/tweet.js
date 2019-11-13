'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    id_str: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    user_id_str: DataTypes.STRING,
    text: DataTypes.STRING,
    reply_count: DataTypes.NUMBER,
    retweet_count: DataTypes.NUMBER,
    favorite_count: DataTypes.NUMBER,
    created_at: DataTypes.STRING
  }, {});
  Tweet.associate = function (models) {
    Tweet.belongsTo(models.User, { as: 'user' });
  };
  Tweet.addHook('beforeCreate', tweet => {
    tweet.created_at = new Date(tweet.created_at).toISOString();
  });
  return Tweet;
};