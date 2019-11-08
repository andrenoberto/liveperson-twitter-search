require('dotenv').config();

const app = require('./app');
const { server } = require('./configuration');
const { TwitterService } = require('./services');

app.listen(server.port, () => {
  console.info(`Server started listening at port ${server.port}`);
});