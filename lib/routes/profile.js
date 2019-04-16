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
        return Profile.create({ name, character, tagline });
      })
      .then(createdProfile => res.send(createdProfile));
  })

  .get('/', (req, res, next) => {
    Profile.find()
      .then(profiles => res.send(profiles));
  })

  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    Profile.findById(id)
      .then(profile => res.send(profile));
  })

  .patch('/:id', (req, res, next) => {
    const { id } = req.params;
    const {
      name,
      character,
      tagline
    } = req.body;

    Profile.findByIdAndUpdate(id, { name, character, tagline })
  });
