const https = require('https');

const request = (url, options) => https.request(url, options, res => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    console.log('Data log:', d.toString());
  });
});

const parseJSON = data => (data ? JSON.parse(data) : {
  
});

const checkStatus = response => {
  if (response.statusCode >= 200 && response.statusCode < 300) {
    return response.text();
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

module.exports = request;
