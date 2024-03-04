// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const landingController = require("../controllers/landingController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/", landingController.get);

module.exports = router;
