const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({

    name: {
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

    position: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    salary: {
        type: Number,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true,
        default: "Active"
    }

});

module.exports = mongoose.model("Employee", employeeSchema);