import express from "express";
const users = express.Router();
import USER from "../models/Users.js";
// CREATE
users.post("/", async (req, res) => {
  const newHotel = new USER(req.body);
  try {
    const saveHotels = await newHotel.save();
    res.status(200).json(saveHotels);
  } catch (error) {
    res.status(500).json(error);
  }
});
// UPDATE
users.put("/", async (req, res) => {
  try {
    const updateHotels = await USER.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updateHotels);
  } catch (error) {
    res.status(500).json(error);
  }
});
// DELETE
// GET
// GET ALL
export default users;
