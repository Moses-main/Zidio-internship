// app.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const locationRoutes = require("./routes/locationRoutes");
// Import other route modules as needed

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/trackerDB", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});
const db = mongoose.connection;
if (db) console.log("Database connection succesful");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/location", locationRoutes);
// Add other route middlewares as needed

// Start server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
