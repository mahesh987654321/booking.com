import express from "express";
import {
  deleteControllerRouteUser,
  getAllControllerRouteUser,
  getControllerRouteUser,
  updateControllerRouteUser,
} from "../controllers/users.js";
import { verifyAdmin, verifyJwt, verifyUser } from "../utils/verifyToken.js";

const users = express.Router();

// UPDATE
users.put("/:id", verifyUser, updateControllerRouteUser);
// DELETE
users.delete("/:id", verifyUser, verifyUser, deleteControllerRouteUser);
// GET
users.get("/:id", verifyUser, getControllerRouteUser);
// GET ALL
users.get("/", verifyAdmin, getAllControllerRouteUser);

export default users;
