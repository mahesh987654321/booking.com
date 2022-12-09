import User from "../models/Users.js";


// UPDATE
export const updateControllerRouteUser = async (req, res, next) => {
  try {
    const updateUsers = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updateUsers);
  } catch (error) {
    next(error);
  }
};
// DELETE
export const deleteControllerRouteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User is deleted");
  } catch (error) {
    next(error);
  }
};
// GET
export const getControllerRouteUser = async (req, res, next) => {
  try {
    const findUser = await User.findById(req.params.id);
    res.status(200).json(findUser);
  } catch (error) {
    next(error);
  }
};
export const getAllControllerRouteUser = async (req, res, next) => {
  // const errMess = true;
  // if (errMess) return next(errorMessage(404, "Your is not found"));

  try {
    const findUsers = await User.find();
    res.status(200).json(findUsers);
  } catch (error) {
    next(error);
  }
};
