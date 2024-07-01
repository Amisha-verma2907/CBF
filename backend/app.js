import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

app.use(express.json());

//Route imports
import post from "./route/postRoute.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use CORS middleware
app.use(cors());
app.use("/api/v1",post);


export default app;