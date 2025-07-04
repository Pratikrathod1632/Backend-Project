//require('dotenv').config({path : './env'})

import dotenv from "dotenv"
import connectDB from "./db/db.js";

dotenv.config({
    path : "./env"
})

connectDB()


/*

import express from "express"

const app = express()

(async () => {

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        app.on("error",(error)=>{
            console.log("Express not able to Communicate Database",error);
            throw error

        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on PORT ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.log("ERROR",error);
        throw error
        
        
    }
})()

*/