const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");


// REGISTER
router.post("/register", authController.register);

// LOGIN
router.post("/login", authController.login);

// LOGOUT
router.post("/logout", authController.logout);

// ME - Protected
router.get(
    "/me",
    authMiddleware,
    authController.me
);

module.exports = router;