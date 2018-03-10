const Project = require('../db/models/project');

module.exports = {
  // GET
  index(req, res, next) {
    const projectProps = req.body;

    Project.get(projectProps).then(project => res.send(project)).catch(next);
  },
  // POST
  create(req, res, next) {
    const projectProps = req.body;

    Project.create(projectProps).then(project => res.send(project)).catch(next);
  },
  // PUT
  edit(req, res, next) {
    const projectId = req.params.id;
    const projectProps = req.body;

    Project.findByIdAndUpdate({ _id: projectId }, projectProps)
      .then(() => Project.findById({ _id: projectId }))
      .then(project => res.send(project))
      .catch(next);
  },
  // DELETE
  delete(req, res, next) {
    const projectId = req.params.id;

    Project.findByIdAndRemove({ _id: projectId })
      .then(project => res.status(204).send(project))
      .catch(next);
  }
};
