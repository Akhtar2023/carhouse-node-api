
require("dotenv").config();


const connectDB = require("./config/db");
const carRoutes = require("./routes/carRoutes");
const customerRoutes = require("./routes/customerRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const authRoutes = require("./routes/authRoutes");
connectDB();


const express = require("express");



const app = express();

const PORT = 3200;

// JSON Middleware
app.use(express.json());

// Import Routes


// Home Route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Car House API - User API</h1>");
});

// Use Routes
app.use("/cars", carRoutes);
app.use("/customers", customerRoutes);
app.use("/employees", employeeRoutes);
app.use("/suppliers", supplierRoutes);
app.use("/bookings", bookingRoutes);
app.use("/auth", authRoutes);

const errorMiddleware = require("./middleware/errorMiddleware");

app.use(errorMiddleware);
//console.log(process.env.JWT_SECRET);
// Start Server
app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});