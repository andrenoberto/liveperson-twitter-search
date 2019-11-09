require('dotenv').config();

const app = require('./app');
const { server, twitter } = require('./configuration');
const { TwitterService } = require('./services');

app.listen(server.port, async () => {
  let twitterService;

  console.info(`Server started listening at port ${server.port}`);
  console.info('Getting Twitter access token...');

  try {
    //const tweets = await TwitterService.searchTweetsWithHashtags('liveperson');
    //console.log(tweets.statuses[0])
  } catch (err) {
    console.error(err);
  }
});