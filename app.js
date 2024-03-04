// app.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const loginController = require("./controllers/loginController");
const landingController = require("./controllers/landingController");
const registerController = require("./controllers/registerLogic");
const userRoutes = require("./routes/userRoutes");
const loginLogic = require("./controllers/loginLogic");
const registerLogic = require("./controllers/registerLogic");
// Import other route modules as needed

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// MongoDB Connection
MONGO_URL = process.env.MONGO_URL;
mongoose.connect("mongodb://localhost:27017/trackerDB", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});
const db = mongoose.connection;
// app.engine("ejs");
app.set("view engine", "ejs");

if (db) console.log("Database connection succesful");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Routes;
app.get("/", landingController);
app.get("/login", loginController);
app.get("/register", registerController);
// app.use(userRoutes);

// Logic for the forms
// app.post("/register", registerLogic);
// app.post("/login", loginLogic);

// Start server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
