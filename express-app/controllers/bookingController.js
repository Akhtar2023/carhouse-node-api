const Booking = require("../models/booking");

// ======================
// GET ALL BOOKINGS
// ======================
const getAllBookings = async (req, res) => {

    const bookings = await Booking.find();

    res.status(200).json(bookings);
};


// ======================
// GET BOOKING BY ID
// ======================
const getBookingById = async (req, res) => {

    const booking = await Booking.findById(req.params.id);

    if (!booking) {
        return res.status(404).json({
            message: "Booking Not Found"
        });
    }

    res.status(200).json(booking);
};


// ======================
// ADD BOOKING
// ======================
const addBooking = (req, res) => {

    const {
        customerName,
        customerEmail,
        car,
        bookingDate,
        cancelDate,
        status,
        price
    } = req.body;

    // Required fields
    if (
        !customerName ||
        !customerEmail ||
        !car ||
        !bookingDate ||
        !price
    ) {
        return res.status(400).json({
            message: "Required fields are missing"
        });
    }

    // Price validation
    if (price <= 0) {
        return res.status(400).json({
            message: "Price must be greater than 0"
        });
    }

    // Cancel date booking date se pehle nahi honi chahiye
    if (cancelDate) {

        const booking = new Date(bookingDate);
        const cancel = new Date(cancelDate);

        if (cancel < booking) {
            return res.status(400).json({
                message: "Cancel date cannot be before booking date"
            });
        }
    }

    const newBooking = {
        id: bookings.length + 1,
        customerName,
        customerEmail,
        car,
        bookingDate,
        cancelDate: cancelDate || null,
        status: status || "Pending",
        price
    };

    bookings.push(newBooking);

    res.status(201).json({
        message: "Booking Added Successfully",
        data: newBooking
    });
};


// ======================
// UPDATE BOOKING
// ======================
const updateBooking = async (req, res) => {

    const updatedBooking = await Booking.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            returnDocument: "after",
            runValidators: true
        }
    );

    if (!updatedBooking) {
        return res.status(404).json({
            message: "Booking Not Found"
        });
    }

    res.status(200).json({
        message: "Booking Updated Successfully",
        data: updatedBooking
    });
};


// ======================
// DELETE BOOKING
// ======================
const deleteBooking = async (req, res) => {

    const deletedBooking = await Booking.findByIdAndDelete(
        req.params.id
    );

    if (!deletedBooking) {
        return res.status(404).json({
            message: "Booking Not Found"
        });
    }

    res.status(200).json({
        message: "Booking Deleted Successfully",
        data: deletedBooking
    });
};


module.exports = {
    getAllBookings,
    getBookingById,
    addBooking,
    updateBooking,
    deleteBooking
};