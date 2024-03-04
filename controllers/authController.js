// controllers/authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(500).send("Error registering user");
  }
};

exports.login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(404).send("User not found");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid password");

  // Create and assign a token
  const token = jwt.sign({ _id: user._id }, "secretkey");
  res.header("auth-token", token).send(token);
};
