import mongoose from "mongoose";

import { DB_Name } from "../constants.js";

const connectDB = async () => {

    try {

        const connection =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`\n MongoDB connected !! DB HOST : ${connection.connection.host}`);
        
        
    } catch (error) {

        console.log("MONGODB Connection error",error);
        process.exit(1)
        
        
    }
    
}

export default connectDB