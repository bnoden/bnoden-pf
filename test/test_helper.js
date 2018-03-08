const mongoose = require('mongoose');

const app = require('../server');

before(done => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/pftest_test');
  mongoose.connection
    .on('error', error => {
      console.warn('Warning', error);
    })
    .once('open', () => done());
});

beforeEach(done => {
  mongoose.connection.collections.projects.drop(() => done());
});
