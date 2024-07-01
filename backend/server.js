import app from "./app.js";

import dotenv from "dotenv";

import bodyParser from "body-parser";
import connectDatabase from "./config/database.js";

//Config
dotenv.config({path:"backend/config/config.env"});

//Connecting to database
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
});
