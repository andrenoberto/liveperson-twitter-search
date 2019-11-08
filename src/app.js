  
const express = require('express');

const routes = require('@src/routes');
const app = express();

function errorHandling(err, req, res, next) {
  console.error(err);
}

app.use('/api', routes);
app.use(errorHandling);

module.exports = app;