  
const express = require('express');

const { cors } = require('./helpers');
const routes = require('./routes');

const app = express();

const errorHandling = (err, req, res, next) => {
  if (err.isNormalized) {
    const { statusCode, errors } = err;
    res.status(statusCode).json({ errors });
  }

  res.status(500).json({
    errors: [{ message: 'An internal server error has occurred.' }],
  });
};

app.use(cors);
app.use('/api', routes);
app.use(errorHandling);

module.exports = app;