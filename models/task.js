const mongoose = require("mongoose");

// Schema defines the structure for the document
// Mongoose model provides interface to the database
// Using the model we will be able to create, read, update, delete
const TaskSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: [true, 'Must provide name'],
    trim: true, //The trim property trims the white space
    maxlength: [20, 'name cannot be more than 20 characters']
  },
  completed: {
    type: Boolean, 
    default: false,
  },
});
// Validation to schema so only non empty fields get selected
// Rather than properties and just type in schema, we can set our properties as an object
// When we setup properties as an object, we can use built in validators
// For instance the above name can be seen
module.exports = mongoose.model("Task", TaskSchema);
