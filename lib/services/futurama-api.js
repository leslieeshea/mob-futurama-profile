const request = require('superagent');

function getCharacterQuote(character) {
  return request
    .get(`http://futuramaapi.herokuapp.com/api/characters/${character}/1`)
    .then(result => {
      return result.body[0].quote;
    });
}

module.exports = {
  getCharacterQuote
};
