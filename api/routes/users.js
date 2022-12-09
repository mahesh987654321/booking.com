import express from "express";
import {
  deleteControllerRouteUser,
  getAllControllerRouteUser,
  getControllerRouteUser,
  updateControllerRouteUser,
} from "../controllers/users.js";
import { verifyJwt } from "../utils/verifyToken.js";

const users = express.Router();

// UPDATE
users.put("/:id", updateControllerRouteUser);
// DELETE
users.delete("/:id", deleteControllerRouteUser);
// GET
users.get("/:id", getControllerRouteUser);
// GET ALL
users.get("/", verifyJwt, getAllControllerRouteUser);
export default users;
