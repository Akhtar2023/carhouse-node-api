
const User = require("../models/user");

const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/AppError");
const generateToken = require("../utils/generateToken");


// ======================
// REGISTER
// ======================

const register = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    // Check required fields
    if (!name || !email || !password) {
        throw new AppError(
            "Name, email and password are required",
            400
        );
    }

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new AppError(
            "Email already registered",
            409
        );
    }

    // Create user
    const user = await User.create({
        name,
        email,
        password
    });

    // Generate JWT
    const token = generateToken(user);

    return res.status(201).json({

        success: true,

        message: "Registration successful",

        token,

        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }

    });

});


// ======================
// LOGIN
// ======================

const login = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
        throw new AppError(
            "Email and password are required",
            400
        );
    }

    // Find user
    const user = await User.findOne({ email }).select("+password");
console.log("LOGIN EMAIL:", email);
console.log("USER FOUND:", user);
    // User not found
    if (!user) {
        throw new AppError(
            "Wrong email or password",
            401
        );
    }

    // Compare password
    const match = await user.comparePassword(password);

    if (!match) {
        throw new AppError(
            "Wrong email or password",
            401
        );
    }

    // Check account status
    if (!user.isActive) {
        throw new AppError(
            "Account is disabled",
            403
        );
    }

    // Generate JWT
    const token = generateToken(user);

    return res.status(200).json({

        success: true,

        message: "Login successful",

        token,

        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }

    });

});


// ======================
// LOGOUT
// ======================

const logout = asyncHandler(async (req, res) => {

    return res.status(200).json({

        success: true,

        message: "Logout successful"

    });

});


// ======================
// ME
// ======================

const me = asyncHandler(async (req, res) => {

    return res.status(200).json({

        success: true,

        user: req.user

    });

});


// ======================
// EXPORT
// ======================

module.exports = {
    register,
    login,
    logout,
    me
};