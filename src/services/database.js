const Sequelize = require('sequelize');

const sequelize = new Sequelize('sqlite:db.sqlite3');

const onConnectionSuccess = () => console.info('Connection has been established successfully.');
const onConnectionFailure = err => console.error('Unable to connect to the database:', err);
const onSyncSuccess = () => console.info('All models have been synchronized.');
const onSyncFailure = err => console.error('Unable to synchronize all models:', err);

sequelize
  .authenticate()
  .then(onConnectionSuccess)
  .catch(onConnectionFailure);

sequelize.sync()
  .then(onSyncSuccess)
  .catch(onSyncFailure);

module.exports = sequelize;