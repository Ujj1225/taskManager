// Using models in controllers
// Instance of a model is document
const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    // .find({}) gets all the documents of collection
    const task = await Task.find({});
    res.status(200).json({task});
    // res.status(200).json({ status: "success", data: {task, nbHits: task.length}});
    // This too is a way how we can set up our response where task.length is the total no of tasks
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
    const { id: taskId } = req.params;
    const spTask = await Task.findOne({ _id: taskId });
    if (!spTask) {
      return res
        .status(404)
        .json({ spTask, message: "No id with given parameter" });
    }
    return res.status(200).json({ spTask });
  } catch (error) {
    return res.status(500).json({
      attempt: "Successful!",
      message: "NOT A VALID ID",
    });
  }
};


// Updating task
const updateTasks = async (req, res) => {
  try {
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
  } catch (error) {
    // Handle errors here if needed.
    res.status(500).json({ error: "An error occurred" });
  }
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
    return res.status(200).json({ spTask });
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
