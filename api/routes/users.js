import express from "express";
const users = express.Router();
users.get("/", (req, res) => {
  res.send("Hello World!");
});

export default users;
