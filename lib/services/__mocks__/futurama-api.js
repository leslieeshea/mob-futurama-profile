module.exports = { 
  getCharacterQuote(character) {
    return Promise.resolve({
      character: `${character}`,
      quote: 'hello there',
      image: 'fakeimg.png'
    });
  }

}


