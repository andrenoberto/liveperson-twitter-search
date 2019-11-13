const { twitter } = require('../configuration');
const { encodeCredentials, request, throwTwitterError } = require('../helpers');

class TwitterService {
  async searchTweets(queryString) {
    try {
      const accessToken = await this.getAccessToken();
      const options = {
        uri: `${twitter.api.baseUrl}/${twitter.api.version}/search/tweets.json`,
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        method: 'GET',
        qs: queryString,
      };

      return await request(options);
    } catch (err) {
      throwTwitterError(err);
    }
  }

  async getAccessToken() {
    try {
      if (this.isAccessTokenAvailable()) {
        return this.accessToken;
      }

      await this.requestAccessToken();
    } catch (err) {
      throwTwitterError(err);
    }

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

      this.accessToken = access_token;
    } catch (err) {
      throwTwitterError(err);
    }
  }
}

module.exports = new TwitterService();