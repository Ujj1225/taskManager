const asyncWrapper = require("../middleware/async");
// Using models in controllers
// Instance of a model is document
const Task = require("../models/task");

const getAllTasks = asyncWrapper(async (req, res) => {
  // .find({}) gets all the documents of collection
  const task = await Task.find({});
  res.status(200).json({ task });
  // res.status(200).json({ status: "success", data: {task, nbHits: task.length}});
  // This too is a way how we can set up our response where task.length is the total no of tasks
});

const postTasks = asyncWrapper(async (req, res) => {
  const { name, completed } = req.body;
  const task = await Task.create({
    name,
    completed,
  });
  res.status(201).json({ task });
});

const getOneTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const spTask = await Task.findOne({ _id: taskId });
  if (!spTask) {
    return res
      .status(404)
      .json({ spTask, message: "No id with given parameter" });
  }
  return res.status(200).json({ spTask });
});

// Updating task
const updateTasks = asyncWrapper(async (req, res) => {
  // Here if we dont set up options we will get old value when returning json
  // Plus even if in our model we defined required: true, the empty name would also be accepted
  // Hence we use options::> the third parameter in findbyidandupdate
  const { id: taskId } = req.params;
  const spTask = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!spTask) {
    return res.status(404).json({ msg: `No task with id: ${taskId}` });
  }
  res.status(200).json({ spTask });
});

const deleteTasks = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const spTask = await Task.findOneAndDelete({ _id: taskId });
  if (!spTask) {
    return res.status(404).json({
      msg: `No task with id: ${taskId}`,
    });
  }
  return res.status(200).json({ spTask });
});
module.exports = {
  getAllTasks,
  postTasks,
  getOneTask,
  updateTasks,
  deleteTasks,
};
