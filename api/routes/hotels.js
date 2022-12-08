import express from "express";
const hotels = express.Router();
import Hotel from "../models/Hotels.js";
// CREATE
hotels.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotels = await newHotel.save();
    res.status(200).json(saveHotels);
  } catch (error) {
    res.status(500).json(error);
  }
});
// UPDATE
hotels.put("/:id", async (req, res) => {
  try {
    const updateHotels = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    console.log(updateHotels);
    res.status(200).json(updateHotels);
  } catch (error) {
    res.status(500).json(error);
  }
});
// DELETE
hotels.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("User is deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
// GET
hotels.get("/:id", async (req, res) => {
  try {
    const deleteHotels = await Hotel.findById(req.params.id);
    res.status(200).json(deleteHotels);
  } catch (error) {
    res.status(500).json(error);
  }
});
// GET ALL
export default hotels;
