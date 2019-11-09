const { twitter } = require('../configuration');
const { encodeCredentials, request } = require('../helpers');

class TwitterService {
  async searchTweetsWithHashtags(...tags) {
    const accessToken = await this.getAccessToken();
    const hashtags = this.addHashSymbol(tags);
    const queryString = hashtags.join('+');
    const options = {
      uri: `${twitter.api.baseUrl}/${twitter.api.version}/search/tweets.json`,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
      method: 'GET',
      qs: {
        'q': queryString,
      },
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

  async getAccessToken() {
    if (this.isAccessTokenAvailable()) {
      return this.accessToken;
    }

    await this.requestAccessToken();

    return this.accessToken;
  }

  isAccessTokenAvailable() {
    return !!this.accessToken;
  }

  async requestAccessToken() {
    try {
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
      const { access_token } = await request(options);
      
      this.setAccessToken(access_token);
    } catch (err) {
      console.error(err);
    }
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }
}

module.exports = new TwitterService();