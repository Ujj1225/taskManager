const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDb = require('./db/connect');
require('dotenv').config();
const port = 3000
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/errorhandler');

// middleware
app.use(express.json());
// Middleware to serve static files 
app.use(express.static('./public'))



// routes
app.use('/api/v1/tasks', tasks);
// Middleware for not found
app.use(notFound);
// Middleware for handling errors
app.use(errorHandlerMiddleware);

// First checking database connection and only if db is connected then we connect to server
// ConnectDb returns a promise; dont forget! so yeah async await
const start = async() =>{   
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(port, () => {
          console.log(`server is listening on port ${port}`);
        });
    } catch (error) {
        console.log(error)
    }
}

start();
    
