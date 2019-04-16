const request = require('supertest');
const app = require('../lib/app');
const Profile = require('../lib/models/Profile');

jest.mock('../lib/services/futurama-api.js');

describe('Profile routes', () => {
  afterEach(() => {
    return Profile.drop();
  });
  it('creates a new profile', () => {
    return request(app)
      .post('/profile')
      .send({
        name: 'cindy',
        character: 'bender'
      })
      .then(res => {
        expect(res.body).toEqual({
          name: 'cindy',
          character: 'bender',
          _id: expect.any(String),
          tagline: expect.any(String)
        });
      });
  });
  it('get a list of all profiles', () => {
    return Profile.create({ name: 'cindy', character: 'bender' })
      .then(() => {
        return request(app)
          .get('/profile');
      })
      .then(res => {
        expect(res.body).toHaveLength(1);
      });
  });
  
});

