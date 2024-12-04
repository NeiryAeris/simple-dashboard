import { config } from "dotenv";
import mongoose from "mongoose";

config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
