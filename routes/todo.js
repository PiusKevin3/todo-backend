const router = require('express').Router();

const TodoController = require('../controllers/todo');


router.get('/show_todos',TodoController.getTodoList);
router.get('/done_todos',TodoController.getDoneTodos);
router.post('/todo',TodoController.createTodo);
router.post('/todo/:id',TodoController.updateTodo);
router.get('/todo/:id',TodoController.getTodo);
router.delete('/todo/:id',TodoController.deleteOneTodoRow);


module.exports = router;
