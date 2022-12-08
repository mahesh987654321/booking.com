import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import users from "./routes/users.js";
import hotels from "./routes/hotels.js";
import rooms from "./routes/rooms.js";
const port = process.env.PORT || 5000;
const app = express();
mongoose.set("strictQuery", true);
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO}`);
    console.log("connected to mongodb");
  } catch (error) {
    handleError(error);
  }
};
app.use("/api/auth", authRoute);
app.use("/api/users", users);
app.use("/api/hotels", hotels);
app.use("/api/rooms", rooms);

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
