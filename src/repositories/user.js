const { User } = require('../models');

const isUserInDatabase = async ({ id }) => {
  const user = await findUser(id);

  return !user;
}

const findUser = async id => await User.findByPk(id);

module.exports = {
  isUserInDatabase,
};