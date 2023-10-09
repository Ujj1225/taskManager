const mongoose = require('mongoose');

// Schema defines the structure for the document
// Mongoose model provides interface to the database
// Using the model we will be able to create, read, update, delete
const TaskSchema = new mongoose.Schema({
    name:String, 
    completed: Boolean,
})

module.exports = mongoose.model('Task', TaskSchema);

