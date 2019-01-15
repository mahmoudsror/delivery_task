const path = require('path');
const tasksController = require(path.resolve('controllers','tasksController.js'));
module.exports = function(app){
  app.get('/tasks/list', tasksController.listTasks);
  app.get('/tasks/list/:id', tasksController.getTask);
  app.put('/tasks/list/:id',tasksController.updateTaskStatus);

}
