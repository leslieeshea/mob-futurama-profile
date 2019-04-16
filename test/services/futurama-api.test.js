const { getCharacterQuote } = require('../../lib/services/futurama-api');

jest.mock('../../lib/services/futurama-api.js');

describe('futurama api', () => {
  it('can get a quote by character', () => {
    return getCharacterQuote('Bender')
      .then(character => {
        expect(character).toEqual({
          character: 'Bender',
          quote: 'hello there',
          image: 'fakeimg.png'
        });
      });
  });
});
