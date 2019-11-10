const { User } = require('../database/models');

const createUser = async user => {
  const { id } = user;

  return await User.findCreateFind({
    where: {
      id,
    },
    defaults: user,
  });
};

module.exports = {
  createUser,
};