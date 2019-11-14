const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}

const encodeCredentials = (username, password) => Buffer.from(`${username}:${password}`).toString('base64');

module.exports = {
  cors,
  encodeCredentials,
};