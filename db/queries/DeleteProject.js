const Project = require('../models/project');

module.exports = _id => {
  // return Project.remove({ _id });  // equivalent to Project.findByIdAndRemove(_id)
  return Project.findByIdAndRemove(_id);
};
