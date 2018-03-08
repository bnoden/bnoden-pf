const Project = require('../models/project');

module.exports = _id => {
  // return Project.findOne({ _id });  // equivalent to findById(_id)
  return Project.findById(_id);
};
