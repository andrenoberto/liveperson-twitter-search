const { User } = require('../models');

const createUser = async user => {
  const {
    id,
    name,
    screen_name,
    location,
    description,
    verified,
    profile_banner_url,
    profile_image_url_https,
  } = user;

  User.create({
    id,
    name,
    screen_name,
    location,
    description,
    verified,
    profile_banner_url,
    profile_image_url_https,
  });
}

const isUserInDatabase = async ({ id }) => {
  const user = await findUser(id);

  return !user;
}

const findUser = async id => await User.findByPk(id);

module.exports = {
  createUser,
  findUser,
  isUserInDatabase,
};