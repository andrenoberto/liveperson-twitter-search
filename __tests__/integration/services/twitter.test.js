jest.mock('../../../app/helpers/request');
const request = require('../../../app/helpers/request');
const TwitterService = require('../../../app/services/twitter');
const twitterResponse = require('../../data/twitter-api-response.json');

describe('TwitterService', () => {
  it('should request and return an access token', async () => {
    const mockedAccessToken = 'a1b2c3d4f5';
    request.mockImplementationOnce(() => ({ access_token: mockedAccessToken }));
    
    const accessToken = await TwitterService.getAccessToken();

    expect(accessToken).toBe(mockedAccessToken);
  });

  it('it should return a list of tweets', async () => {
    request.mockImplementationOnce(() => twitterResponse);

    const { search_metadata: { count }, statuses } = await TwitterService.searchTweets('');

    expect(statuses.length).toBe(count);
  })
});