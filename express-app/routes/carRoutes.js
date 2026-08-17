const express = require("express");

const router = express.Router();

const carController = require("../controllers/carController");
const authMiddleware = require("../middleware/authMiddleware");

// Protected routes

router.get("/", authMiddleware, carController.getAllCars);

router.get("/:id", authMiddleware, carController.getCarById);

router.post("/", authMiddleware, carController.addCar);

router.put("/:id", authMiddleware, carController.updateCar);

router.delete("/:id", authMiddleware, carController.deleteCar);

module.exports = router;