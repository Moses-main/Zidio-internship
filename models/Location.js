// models/Location.js
import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  latitude: Number,
  longitude: Number,
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Location", locationSchema);
