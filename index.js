const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');
import cookieParser from "cookie-parser";

const auth_routes = require('./routes/auth.js')

app.use(cors());
dotenv.config();
app.use(express.json());
app.use(cookieParser())

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected to mongo DB");
    } catch (error) {
        console.log(error);
    }
}



app.use('/api/auth',auth_routes);



app.listen("5000", () => {
    connect();
    console.log("server is running at port 5000");
})