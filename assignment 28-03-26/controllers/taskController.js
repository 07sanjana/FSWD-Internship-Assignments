let tasks = require('../models/taskModel');

exports.getAllTasks = (req, res) => {
  res.json(tasks);
};

exports.getTaskById = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  res.json(task);
};

exports.createTask = (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    status: req.body.status
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  task.title = req.body.title || task.title;
  task.status = req.body.status || task.status;

  res.json(task);
};

exports.deleteTask = (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);

  res.json({ message: "Task deleted" });
};