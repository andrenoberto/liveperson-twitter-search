const { User } = require('../database/models');

const createUser = async newUser => {
  const { id_str } = newUser;

  return await User.findCreateFind({
    where: {
      id_str,
    },
    defaults: newUser,
  });
};

module.exports = {
  createUser,
};