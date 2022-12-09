import jwt from "jsonwebtoken";
import { errorMessage } from "./errorMessage.js";

export const verifyJwt = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(errorMessage(401, "User is not authorized"));
  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) return next(errorMessage(403, "Token is not valid"));
  });
  req.user = user;
  next();
};
