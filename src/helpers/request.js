const rp = require('request-promise-native');

const request = options => rp(options).then(parseJSON);

const parseJSON = data => data ? JSON.parse(data) : {};

const checkStatus = response => {
  if (response.statusCode >= 200 && response.statusCode < 300) {
    return response.text();
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};




module.exports = request;
