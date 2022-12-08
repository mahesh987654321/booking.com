import express from "express";
const rooms = express.Router();
rooms.get("/", (req, res) => {
  res.send("Hello World!");
});

export default rooms;
