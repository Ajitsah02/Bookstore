// const express = require('express')
// const dotenv = require("dotenv")
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"

import bookRoute from "./route/book.route.js"
import userRoute from './route/user.route.js'

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

// connect to mongodb 1st Way ****************
try {
    mongoose.connect(URI,{
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    console.log("connected to mongodb")
} catch (error) {
    console.log("Error: ", error);
}

// *************** Connect to the database 2nd Way ******************
// function connectTODb(){
//     mongoose.connect(URI).then(()=> logger.info("connected to db"))
//     .catch((err)=>logger.err(err))
// }
// const logger = {
//     info:(info) => console.log(info),
//     err:(err)=>console.error(err)
// }
// connectTODb()

app.use("/book",bookRoute);
app.use("/user",userRoute)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})


// const mongoose = require('mongoose');
// mongoose.connect(URI,{
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// })
// .then(db => console.log('DB is connected'))
// .catch(err => console.log(err));