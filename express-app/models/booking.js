const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

    customerName: {
        type: String,
        required: true
    },

    customerEmail: {
        type: String,
        required: true
    },

    car: {
        type: String,
        required: true
    },

    bookingDate: {
        type: Date,
        required: true
    },

    cnacalDate: {
        type: Date,
        required: true
    },

    status: {
        type: String,
        required: true,
        default: "Pending"
    },

    price: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model("Booking", bookingSchema);