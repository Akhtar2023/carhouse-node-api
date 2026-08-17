
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/carhouse");

        console.log("MongoDB Connected");
    } catch (error) {
        console.log("MongoDB Connection Error:", error);
    }
};

module.exports = connectDB;