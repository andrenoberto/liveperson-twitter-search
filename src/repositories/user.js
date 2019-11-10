const { User } = require('../models');

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