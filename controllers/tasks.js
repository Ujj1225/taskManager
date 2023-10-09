// Using models in controllers
// Instance of a model is document
const Task = require("../models/task");

const getAllTasks = (req, res) => {
  res.send("Fetching all items");
};

const postTasks = async (req, res) => {
  const {name, completed} = req.body;
  const task = await Task.create({
    name, 
    completed
  });
  res.status(201).send(task);
};

const getOneTask = (req, res) => {
  res.json({
    id: req.params.id,
  });
};

const updateTasks = (req, res) => {
  res.send(`The task you are trying to update is ${req.params.id}`);
};

const deleteTasks = (req, res) => {
  res.send(`The task you are trying to delete is ${req.params.id}`);
};
module.exports = {
  getAllTasks,
  postTasks,
  getOneTask,
  updateTasks,
  deleteTasks,
};
