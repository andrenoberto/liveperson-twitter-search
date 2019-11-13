const server = {
  port: process.env.PORT || 3000,
};

const twitter = {
  api: {
    baseUrl: process.env.TWITTER_API_BASE_URL,
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