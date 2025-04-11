const todos = require("../models/todoModel");

const getTodos = (req, res) => {
  res.json(todos);
};

const addTodo = (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: req.body.completed || false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const todo = todos.find((t) => t.id === parseInt(id));

  if (!todo) return res.status(404).json({ message: "Todo topilmadi" });

  todo.task = req.body.task || todo.task;
  todo.completed =
    req.body.completed !== undefined ? req.body.completed : todo.completed;

  res.json(todo);
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((t) => t.id === parseInt(id));

  if (index === -1) return res.status(404).json({ message: "Todo topilmadi" });

  todos.splice(index, 1);
  res.status(204).send();
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
