const { twitter } = require('../configuration');
const { encodeCredentials, request } = require('../helpers');

class TwitterService {
  constructor(accessToken) {
    this.accessToken = accessToken;
    console.log('Access Token:', accessToken);
  }

  static async getAccessToken() {
    const basicToken = encodeCredentials(twitter.consumerApi.key, twitter.consumerApi.secret);
    const options = {
      uri: `${twitter.api.baseUrl}/oauth2/token?grant_type=client_credentials`,
      headers: {
        'Authorization': `Basic ${basicToken}`,
      },
      method: 'POST',
      qs: {
        'grant_type': 'client_credentials',
      },
    };

    return await request(options);
  }

  async searchTweetsWithHashtags(...tags) {
    const hashtags = this.addHashSymbol(tags);
    const queryString = hashtags.join('+');
    const options = {
      uri: `${twitter.api.baseUrl}/${twitter.api.version}/search/tweets.json`,
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
      },
      method: 'GET',
      qs: {
        'q': queryString
      }
    };

    try {
      return await request(options);
    } catch (err) {
      console.error(err);
    }
  }

  addHashSymbol(...tags) {
    return tags.map(tag => `#${tag}`);
  }
}

const accessToken = async () => await TwitterService.getAccessToken();

module.exports = new TwitterService(accessToken);