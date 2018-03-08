const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../server');

const Project = mongoose.model('project');

describe('Projects controller', () => {
  it('POST to /api/projects creates a new project', done => {
    const name = 'postName';
    Project.count().then(count => {
      request(app).post('/api/projects').send({ name }).end(() => {
        Project.count().then(newCount => {
          // console.log('count:', count);
          // console.log('newCount:', newCount);
          assert(count + 1 === newCount);
        });
      });
    });
    done();
  });
});
