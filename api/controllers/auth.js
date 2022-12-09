import User from "../models/Users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { errorMessage } from "../utils/errorMessage.js";

export const register = async (req, res, next) => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).json("User has been created");
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(errorMessage(404, "User is not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(errorMessage(400, "Wrong password or username"));
    const token = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      process.env.JWT_KEY
    );

    const { isAdmin, password, ...other } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...other });
  } catch (error) {
    next(error);
  }
};
