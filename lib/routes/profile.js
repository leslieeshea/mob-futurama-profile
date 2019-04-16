const { Router } = require('express');
const Profile = require('../models/Profile');
const { getCharacterQuote } = require('../services/futurama-api');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { 
      name,
      character
    } = req.body;

    getCharacterQuote(character)
      .then(tagline => {
        Profile.create({ name, character, tagline })
          .then(createdProfile => res.send(createdProfile));
      });
  })

  .get('/', (req, res, next) => {
    Profile.find()
      .then(profiles => res.send(profiles));
  })
