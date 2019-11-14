'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tweets', {
      id_str: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      user_id_str: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id_str'
        },
      },
      text: {
        type: Sequelize.STRING
      },
      reply_count: {
        type: Sequelize.NUMBER
      },
      retweet_count: {
        type: Sequelize.NUMBER
      },
      favorite_count: {
        type: Sequelize.NUMBER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tweets');
  }
};