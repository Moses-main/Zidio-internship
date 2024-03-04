// user.js (or userModel.js)
import locationSchema from "./models/Location";
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  locationHistory: {
    type: [locationSchema],
    default: [],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
