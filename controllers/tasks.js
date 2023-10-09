// Using models in controllers
// Instance of a model is document
const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    // .find({}) gets all the documents of collection
    const task = await Task.find({});
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({
      message: "could not fetch all tasks",
    });
  }
};

const postTasks = async (req, res) => {
  try {
    const { name, completed } = req.body;
    const task = await Task.create({
      name,
      completed,
    });
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
};

const getOneTask = async (req, res) => {
  try {
    // The below statement provides the id alias as taskId
    const { id: taskId } = req.params;
    // We always check for _id becuase thats what mongo provides as default
    const spTask = await Task.findOne({ _id: taskId });
    res.status(200).json({ spTask });
  } catch (error) {
    res.status(404).json({
      attempt: "Successful!",
      message: "NOT A VALID ID",
    });
  }
};

const updateTasks = (req, res) => {
  res.send(`The task you are trying to update is ${req.params.id}`);
};

const deleteTasks = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const spTask = await Task.findOneAndDelete({ _id: taskId });
    if (!spTask) {
      return res.status(404).json({
        msg: `No task with id: ${taskId}`,
      });
    }
    res.status(200).json({spTask});
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
module.exports = {
  getAllTasks,
  postTasks,
  getOneTask,
  updateTasks,
  deleteTasks,
};
