const express = require("express");
const {
  getAllTasks,
  postTasks,
  getOneTask,
  updateTasks,
  deleteTasks,
} = require("../controllers/tasks");
const router = express.Router();

router.route("/").get(getAllTasks).post(postTasks);
router.route("/:id").get(getOneTask).patch(updateTasks).delete(deleteTasks);

module.exports = router;
