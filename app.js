// app.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const loginController = require("./controllers/loginController");
const landingController = require("./controllers/landingController");
const registerController = require("./controllers/registerController");
const userRoutes = require("./routes/userRoutes");
// Import other route modules as needed

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// MongoDB Connection
MONGO_URL = process.env.MONGO_URL;
mongoose.connect("mongodb://localhost:27017/trackerDB", {
  // mongoose.connect(MONGO_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});
const db = mongoose.connection;
if (db) console.log("Database connection succesful");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Routes;
app.get("/", landingController);
app.get("login", loginController);
app.post("register", registerController);
app.use(userRoutes);
// Start server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
