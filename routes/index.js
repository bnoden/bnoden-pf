const ProjectController = require('../controller/project_controller');

module.exports = app => {
  // Watch for incoming request of GET to route localhost:<PORT>/api
  app.post('/api/projects', ProjectController.create);
  app.put('/api/projects/:id', ProjectController.edit);
  app.delete('/api/projects/:id', ProjectController.delete);
  app.get('/api/projects', ProjectController.index);
};
