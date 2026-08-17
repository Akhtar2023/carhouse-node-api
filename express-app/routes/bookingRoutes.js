const express = require("express");

const router = express.Router();

const bookingController = require("../controllers/bookingController");


// GET ALL BOOKINGS
router.get("/", bookingController.getAllBookings);


// GET BOOKING BY ID
router.get("/:id", bookingController.getBookingById);


// POST BOOKING
router.post("/", bookingController.addBooking);


// UPDATE BOOKING
router.put("/:id", bookingController.updateBooking);


// DELETE BOOKING
router.delete("/:id", bookingController.deleteBooking);


module.exports = router;