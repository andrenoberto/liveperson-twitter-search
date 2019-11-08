const encodeCredentials = (username, password) => Buffer.from(`${username}:${password}`).toString('base64');

module.exports = {
  encodeCredentials,
};