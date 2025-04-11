const express = require("express");

const router = express.Router();

const {
  getTodos,
  addTodos,
  updateTodo,
  deleteTodo,
  addTodo,
} = require("../controllers/todoController");

router.get("/", getTodos);
router.post("/", addTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
