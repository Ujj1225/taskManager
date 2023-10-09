const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://ujjwaljha1225:ujjwal@taskmanager.rgg9u36.mongodb.net/taskManager?retryWrites=true&w=majority";


  const connectDB = (url) =>{
    return mongoose.connect(connectionString, {
      useCreateindex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
    });
  }



  // Other parameters to connect db is provided to remove deprecated warnings
// mongoose
//   .connect(
//     connectionString,{
//         useCreateindex: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useNewUrlParser: true, 
//     }
//   )
//   .then(() => {
//     console.log("CONNECTED TO THE DATABASE...");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// Mongoose.connect(connectionString) returns a promise so we will use .then method


module.exports = connectDB;