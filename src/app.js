  
const express = require('express');

const routes = require('./routes');
const app = express();

function errorHandling(err, req, res, next) {
  console.error(err);
}

app.use('/api', routes);
app.use(errorHandling);

module.exports = app;