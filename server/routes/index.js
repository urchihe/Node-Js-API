const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;
const userController = require('../controllers').users;
const contactController = require('../controllers').contacts;
const validate = require('express-validation');
const paramValidation = require('./validation/user');
const passport = require('passport');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Contact API!',
  }));

  app.post('/api/todos', todosController.create);
  app.get('/api/todos', todosController.list);
  app.get('/api/todos/:todoId', todosController.retrieve);
  app.put('/api/todos/:todoId', todosController.update);
  app.delete('/api/todos/:todoId', todosController.destroy); 

  app.post('/api/users', validate(paramValidation.create), userController.create);
  app.get('/api/users/:userId', userController.retrieve);
  app.put('/api/user/:userId', userController.update);
  app.delete('/api/user/:userId', userController.destroy);

  app.post('/api/todos/:todoId/items', todoItemsController.create);
  app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
  app.delete(
    '/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy
  );
  app.post('/api/contact/:userId/contact', contactController.create);
  app.put('/api/contact/:userId/contact/:contactId', contactController.update);
  app.delete(
    '/api/contact/:userId/contact/:contactId',  contactController.destroy
  );


  // For any other request method on todo items, we're going to return "Method Not Allowed"
  app.all('/api/todos/:todoId/items', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
  }));
};