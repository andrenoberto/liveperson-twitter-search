const server = {
  port: process.env.PORT,
};

const twitter = {
  api: {
    endpoint: process.env.TWITTER_API_ENDPOINT,
    version: process.env.TWITTER_API_VERSION,
  },
  consumerApi: {
    key: process.env.TWITTER_CONSUMER_API_KEY,
    secret: process.env.TWITTER_CONSUMER_API_SECRET_KEY,
  },
};

module.exports = {
  server,
  twitter,
};