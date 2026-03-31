const express = require('express');
const router = express.Router();

let tasks = require('../data/tasks');

// GET all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// GET task by id
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  res.json(task);
});

// CREATE task
router.post('/', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    status: req.body.status
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// UPDATE task
router.put('/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  task.title = req.body.title || task.title;
  task.status = req.body.status || task.status;

  res.json(task);
});

// DELETE task
router.delete('/:id', (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);

  res.json({ message: "Task deleted" });
});

module.exports = router;