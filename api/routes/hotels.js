import express from "express";
import {
  deleteControllerRouteHotel,
  getAllControllerRouteHotel,
  getControllerRouteHotel,
  postControllerRouteHotel,
  updateControllerRouteHotel,
} from "../controllers/hotels.js";
const hotels = express.Router();

// CREATE
hotels.post("/", postControllerRouteHotel);
// UPDATE
hotels.put("/:id", updateControllerRouteHotel);
// DELETE
hotels.delete("/:id", deleteControllerRouteHotel);
// GET
hotels.get("/:id", getControllerRouteHotel);
// GET ALL
hotels.get("/", getAllControllerRouteHotel);
export default hotels;
