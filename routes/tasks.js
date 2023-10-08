
const express = require('express');
const { getAllTasks } = require('../controllers/tasks');
const router = express.Router();

router.route('/').get(getAllTasks)
.post()
router.route('/:id').get().patch().delete();

module.exports = router