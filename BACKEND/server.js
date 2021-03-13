const express = require('express')
const server = express()
const mongoose = require('mongoose')
const users = require('./routes/users')
const bodyParser = require('body-parser')

require('dotenv').config();


//connect to the database using mangoose

////////to create a user login\\\\\\\\\ 
//1. create server and connect to mangodb using mangoose
const connectionConfig= {useNewUrlParser:true, useUnifiedTopology:true};
mongoose.connect(process.env.CONNECTION_STRING, connectionConfig)
.then(
    (dbDocument) => {
        console.log('DB is connected')
    }
)
.catch(
    (error) => {
        console.log('error occured', error)

    }
)

server.listen(
    3002, () => {
        console.log("Server Running on http://localhost:3002/")
    }
)
// Tell express how to use body-parser
server.use( bodyParser.urlencoded({ extended: false }) );
// Also tell express to recognize JSON
server.use( bodyParser.json() );

server.use(
    '/user', users
)
