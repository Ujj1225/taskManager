const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://ujjwaljha1225:ujjwal@taskmanager.rgg9u36.mongodb.net/taskManager?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("CONNECTED TO THE DATABASE...");
  })
  .catch((err) => {
    console.log(err);
  });
// Mongoose.connect(connectionString) returns a promise so we will use .then method
