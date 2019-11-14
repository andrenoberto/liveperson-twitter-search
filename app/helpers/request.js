const rp = require('request-promise-native');

const request = options => rp(options).then(parseJSON);

const parseJSON = data => data ? JSON.parse(data) : {};

module.exports = request;