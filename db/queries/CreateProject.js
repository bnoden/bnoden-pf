const Project = require('../models/project');

module.exports = projectProps => {
  const project = new Project(projectProps);

  return project.save();
};
