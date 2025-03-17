import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Mongodb connection !!! DB HOST : ${connectionInstance.connection.host} `
    ); // MUST CHECK : check by consoling connectionInstance
  } catch (error) {
    console.log("Error db connection failed check again ", error);
    process.exit(1); // MUST CHECK : Learn about process.exit and different different codes.
  }
};

export default connectDB;
