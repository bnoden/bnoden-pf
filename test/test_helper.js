const mongoose = require('mongoose');

before(done => {
  mongoose.connect('mongodb://localhost/pf_test', {
    promiseLibrary: global.Promise
  });
  mongoose.connection
    .once('open', () => {
      done();
    })
    .on('error', error => {
      console.warn('Warning', error);
    });
});

beforeEach(done => {
  const { projects } = mongoose.connection.collections;

  projects.drop(() => {
    done();
  });
});
