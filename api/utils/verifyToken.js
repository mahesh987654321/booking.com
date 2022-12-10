import jwt from "jsonwebtoken";
import { errorMessage } from "./errorMessage.js";

export const verifyJwt = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(errorMessage(401, "User is not authorized"));
  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) return next(errorMessage(403, "Token is not valid"));
    req.user = user;
    next();
  });
};
export const verifyUser = (req, res, next) => {
  verifyJwt(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(errorMessage(403, "You are not authorized!"));
    }
  });
};
export const verifyAdmin = (req, res, next) => {
  verifyJwt(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(errorMessage(403, "You are not authorized!"));
    }
  });
};
