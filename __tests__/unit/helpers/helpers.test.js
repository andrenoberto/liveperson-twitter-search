const { encodeCredentials } = require('../../../app/helpers');

describe('Utils', () => {
  it('should encode credentials', () => {
    const credentials = {
      username: 'liveperson',
      password: 'liveperson',
      encoded: 'bGl2ZXBlcnNvbjpsaXZlcGVyc29u',
    };
    
    const token = encodeCredentials(credentials.username, credentials.password);

    expect(token).toBe(credentials.encoded);
  });
})