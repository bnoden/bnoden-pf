const Project = require('../models/project');

module.exports = (_id, projectProps) => {
  // return Project.update({ _id }, artistProps);  // == Project.findByIdAndUpdate(_id, artistProps)
  return Project.findByIdAndUpdate(_id, projectProps);
};
