const assert = require('assert');
const mongoose = require('mongoose');

const app = require('../server');
const Project = require('../models/project');

describe('Delete a project', () => {
  let testProject;
  let name = 'Test Project';

  beforeEach(done => {
    testProject = new Project({ name });
    testProject.save().then(() => done());
  });

  function assertRemove(operation, done) {
    operation
      .then(() => Project.findOne({ name }))
      // then, with found project...
      .then(project => {
        // assert(project === null);
        assert(!project); // test that project was successfully deleted
        done();
      });
  }

  it('model instance remove', done => {
    // console.log(testProject.name);
    assertRemove(testProject.remove(), done);
  });

  it('class method remove', done => {
    assertRemove(Project.remove({ name }), done);
  });

  it('class method findOneAndRemove', done => {
    assertRemove(Project.findOneAndRemove({ name }), done);
  });

  it('class method findByIdAndRemove', done => {
    assertRemove(Project.findByIdAndRemove(testProject._id), done);
  });
});
