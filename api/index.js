import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import users from "./routes/users.js";
import cookieParser from "cookie-parser";
import hotels from "./routes/hotels.js";
import rooms from "./routes/rooms.js";
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
mongoose.set("strictQuery", true);
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO}`);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", users);
app.use("/api/hotels", hotels);
app.use("/api/rooms", rooms);
app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";
  return res.status(errStatus).json({
    message: errMessage,
    stack: err.stack,
    status: errStatus,
    success: false,
  });
});
app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
