const { User } = require('../database/models');

const createUser = async newUser => {
  const user = getNormalizedUser(newUser);
  const { id } = user;

  return await User.findCreateFind({
    where: {
      id,
    },
    defaults: user,
  });
};


const getNormalizedUser = user => {
  const {
    id,
    name,
    screen_name: screenName,
    location,
    description,
    url,
    verified,
    profile_image_url_https: profileImage
  } = user;

  return {
    id,
    name,
    screenName,
    location,
    description,
    url,
    verified,
    profileImage,
  };
}

module.exports = {
  createUser,
};