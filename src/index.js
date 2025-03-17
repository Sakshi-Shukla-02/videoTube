//require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});
connectDB();

/*import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error ", (error) => {
      console.log("app is not able to talk to database", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`app is listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error DB having issues ", error);
    throw error;   
  }   // try running this whole code at once. 
})(); */
