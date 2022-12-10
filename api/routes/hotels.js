import express from "express";
import {
  deleteControllerRouteHotel,
  getAllControllerRouteHotel,
  getControllerRouteHotel,
  postControllerRouteHotel,
  updateControllerRouteHotel,
} from "../controllers/hotels.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const hotels = express.Router();

// CREATE
hotels.post("/", verifyAdmin, postControllerRouteHotel);
// UPDATE
hotels.put("/:id", verifyAdmin, updateControllerRouteHotel);
// DELETE
hotels.delete("/:id", verifyAdmin, deleteControllerRouteHotel);
// GET
hotels.get("/:id", verifyUser, getControllerRouteHotel);
// GET ALL
hotels.get("/", verifyAdmin, getAllControllerRouteHotel);
export default hotels;
