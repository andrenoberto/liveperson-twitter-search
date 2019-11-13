const { User } = require('../models');

const createUser = async user => await User.findCreateFind({
    where: {
      id_str: user.id_str,
    },
    defaults: user,
  });

module.exports = {
  createUser,
};