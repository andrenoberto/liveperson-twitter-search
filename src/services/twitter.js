const { twitter } = require('../configuration');
const { encodeCredentials, request } = require('../helpers');

class TwitterService {
  constructor() {
    this.basicToken = encodeCredentials(twitter.consumerApi.key, twitter.consumerApi.secret);
    this.url = `${twitter.api.baseUrl}/${twitter.api.version}`;
    this.getAccessToken();
  }

  async getAccessToken() {
    const endpoint = `${twitter.api.baseUrl}/oauth2/token?grant_type=client_credentials`;
    const options = {
      headers: {
        'Authorization': `Basic ${this.basicToken}`,
      },
      method: 'POST',
      qs: {
        'grant_type': 'client_credentials',
      },
    };

    console.log(endpoint);
    const result = await request(endpoint, options);
    // console.log(result);
    result.write('');
    result.end()
  }
}

module.exports = new TwitterService();