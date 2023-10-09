const getAllTasks = (req, res) => {
  res.send("Fetching all items");
};

const postTasks = (req, res) => {
  res.send("posting items");
};

const getOneTask = (req, res) => {
  res.json({
    id: req.params.id
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
