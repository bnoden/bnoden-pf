const assert = require('assert');
const request = require('supertest');
const app = require('../server');

describe('The Express app', () => {
  it('handles a GET request to /api', done => {
    request(app).get('/api').end((err, response) => {
      assert(response.body.express === 'App is running from server.js');
      done();
    });
  });
});
