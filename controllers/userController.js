// userController.js
const User = require("./user");

// userController.js

import User from "../models/User";

// Create a new user
export const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Get user by ID
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "User not found",
    });
  }
};

// Update user by ID
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Delete user by ID
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.trackLocation = async (req, res) => {
  try {
    // Assuming you have obtained the location data
    const { city, country } = req.body.locationData;

    // Get the user ID from the authenticated user
    const userId = req.user.id; // Assuming you have implemented authentication middleware

    // Find the user by ID
    const user = await User.findById(userId);

    // Add the new location to the beginning of the location history array
    user.locationHistory.unshift({ city, country });

    // Limit the array length to 5 to store only the last 5 locations visited
    if (user.locationHistory.length > 5) {
      user.locationHistory = user.locationHistory.slice(0, 5);
    }

    // Save the user with the updated location history
    await user.save();

    res.status(200).json({ message: "Location tracked successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
