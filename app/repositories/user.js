const { User } = require('../models');

const createUser = async user => await User.findCreateFind({
    where: {
      id: user.id,
    },
    defaults: user,
  });

module.exports = {
  createUser,
};