const Project = require('../models/project');

module.exports = (_id, projectProps) => {
  // return Project.update({ _id }, projectProps);  // == Project.findByIdAndUpdate(_id, projectProps)
  return Project.findByIdAndUpdate(_id, projectProps);
};
