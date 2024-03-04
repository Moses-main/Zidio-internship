// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  // Add other user-related fields as needed
});

module.exports = mongoose.model('User', userSchema);
