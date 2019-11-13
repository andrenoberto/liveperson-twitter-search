module.exports = {
  dialect: process.env.DATABASE_DIALECT || 'sqlite',
  storage: process.env.DATABASE_STORAGE || 'db.sqlite3',
};