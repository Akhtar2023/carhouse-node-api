const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    company: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    suppliedItem: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true,
        default: "Active"
    }

});

module.exports = mongoose.model("Supplier", supplierSchema);