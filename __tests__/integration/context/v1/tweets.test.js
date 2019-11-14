const request = require('supertest');

jest.mock('../../../../app/services/twitter');
const TwitterService = require('../../../../app/services/twitter');
const app = require('../../../../app/app');
const { truncate } = require('../../../utils');
const twitterResponse = require('../../../data/twitter-api-response.json');

TwitterService.requestAccessToken.mockImplementationOnce(() => ({ access_token: 'a1b2c3d4f5' }));
TwitterService.searchTweets.mockImplementationOnce(() => twitterResponse);

describe('TweetsController', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should look up for and return all found tweets', async () => {
    const { status, body: { searchMetadata: { count } } } = await request(app).get('/api/v1/tweets?q=%23liveperson');

    expect(status).toBe(200);
    expect(count).toBe(13);
  });
});