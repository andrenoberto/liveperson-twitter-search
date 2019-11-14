module.exports = {
  database: {
    dialect: process.env.DATABASE_DIALECT || 'sqlite',
    storage: process.env.DATABASE_STORAGE || 'db.sqlite3',
    logging: false,
    define: {
      timestamps: false,
      underscored: true,
      underscoredAll: true,
    },
  },
  server: {
    port: process.env.PORT || 3000,
  },
  twitter: {
    api: {
      baseUrl: process.env.TWITTER_API_BASE_URL,
      version: process.env.TWITTER_API_VERSION,
    },
    consumerApi: {
      key: process.env.TWITTER_CONSUMER_API_KEY,
      secret: process.env.TWITTER_CONSUMER_API_SECRET_KEY,
    },
  },
};