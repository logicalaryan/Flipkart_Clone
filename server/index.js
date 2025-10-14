import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import cors from "cors";
import DefaultData from "./default.js";
import Router from "./routes/routes.js";
dotenv.config();
import bodyParser from "body-parser";
const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);
const PORT = 8000;


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// connect DB
Connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

DefaultData();
