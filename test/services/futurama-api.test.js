const { getCharacterQuote } = require('../../lib/services/futurama-api');

jest.mock('../../lib/services/futurama-api.js');

describe('futurama api', () => {
  it('can get a quote by character', () => {
    return getCharacterQuote('Bender')
      .then(tagline => {
        expect(tagline).toEqual('hello');
      });
  });
});
