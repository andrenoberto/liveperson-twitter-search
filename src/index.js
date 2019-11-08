require('dotenv').config();
const app = require('./app');

const { server } = require('./configuration');

app.listen(server.port, () => {
  console.info(`Server started listening at port ${server.port}`);
});