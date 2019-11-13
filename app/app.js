  
const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const errorHandling = (err, req, res, next) => {
  console.error(err);
};

app.use(cors({ origin: '*' }));
app.use('/api', routes);
app.use(errorHandling);

module.exports = app;