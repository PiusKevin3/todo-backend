const router = require('express').Router();

const TodoController = require('../controllers/todo');


router.post('/todo',TodoController.createTodo);
router.post('/todo/:id',TodoController.updateTodo);
router.get('/todo/:id',TodoController.getTodo);
router.get('/todos',TodoController.getTodoList);
router.delete('/todo/:id',TodoController.deleteOneTodoRow);


module.exports = router;
