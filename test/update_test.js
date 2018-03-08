const assert = require('assert');
const Project = require('../db/models/project');

describe('Update records', () => {
  let testProject;
  let name = 'Original Title';
  let newName = 'New Title';

  beforeEach(done => {
    testProject = new Project({ name });
    testProject.save().then(() => done());
  });

  function assertName(operation, done) {
    operation
      .then(() => Project.find({})) // empty object finds all projects
      .then(projects => {
        assert(projects.length === 1);
        assert(projects[0].name === newName);
        done();
      });
  }

  it('instance type using set and save', done => {
    testProject.set('name', newName);
    assertName(testProject.save().then(() => done()));
  });

  it('a model instance can update', done => {
    assertName(testProject.update({ name: newName }), done);
  });

  it('a model class can update', done => {
    assertName(Project.update({ name }, { name: newName }), done);
  });

  it('a model class can update one record', done => {
    assertName(Project.findOneAndUpdate({ name }, { name: newName }), done);
  });

  it('a model class can find a record with an Id and update', done => {
    assertName(
      Project.findByIdAndUpdate(testProject._id, { name: newName }),
      done
    );
  });
});
