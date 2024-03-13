import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { login } from "./controllers/loginController.js";
import { landing } from "./controllers/landingController.js";
import { trackLocation } from "./controllers/locationController.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// MongoDB Connection
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect("mongodb://localhost:27017/trackerDB", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});
const db = mongoose.connection;
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Define partials object
const partials = { header: "headers", footer: "footer" };
if (db) console.log("Database connection succesful");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Routes;
app.get("/", landing);
app.get("/login", login);
app.get("/location", trackLocation);

// Start server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
