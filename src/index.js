// require('dotenv').config({path: './env'});
import dotenv from "dotenv";

import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path: '.env'
})

const app = express()

connectDB()


/*
(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("error: ",error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App listening on ${process.env.PORT}`)
        })
    }
    catch(error){
        console.log("ERROR: " , error)
        throw error
    }

})()

*/


