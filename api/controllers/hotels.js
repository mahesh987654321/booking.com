import Hotel from "../models/Hotels.js";

// POST
export const postControllerRouteHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotels = await newHotel.save();
    res.status(200).json(saveHotels);
  } catch (error) {
    next(error);
  }
};
// UPDATE
export const updateControllerRouteHotel = async (req, res, next) => {
  try {
    const updateHotels = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updateHotels);
  } catch (error) {
    next(error);
  }
};
// DELETE
export const deleteControllerRouteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel is deleted");
  } catch (error) {
    next(error);
  }
};
// GET
export const getControllerRouteHotel = async (req, res, next) => {
  try {
    const findHotel = await Hotel.findById(req.params.id);
    res.status(200).json(findHotel);
  } catch (error) {
    next(error);
  }
};
export const getAllControllerRouteHotel = async (req, res, next) => {
  // const errMess = true;
  // if (errMess) return next(errorMessage(404, "Your is not found"));

  try {
    const findHotels = await Hotel.find();
    res.status(200).json(findHotels);
  } catch (error) {
    next(error);
  }
};
