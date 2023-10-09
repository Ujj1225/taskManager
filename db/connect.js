const mongoose = require("mongoose");

  const connectDB = (url) =>{
    return mongoose.connect(url, {
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