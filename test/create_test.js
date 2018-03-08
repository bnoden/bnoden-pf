const assert = require('assert');
const Project = require('../models/project');

describe('Creating records', () => {
  let name = 'Project Name';

  it('saves a project', done => {
    const project = new Project({ name });

    project.save().then(() => {
      assert(!project.isNew);
      done();
    });
  });
});
