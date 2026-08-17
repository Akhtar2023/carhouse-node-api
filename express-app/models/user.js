const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        select: false
    },

    role: {
        type: String,
        default: "user"
    },

    isActive: {
        type: Boolean,
        default: true
    }

});


// ======================
// COMPARE PASSWORD
// ======================

userSchema.methods.comparePassword = async function (enteredPassword) {

    return await bcrypt.compare(
        enteredPassword,
        this.password
    );

};


// ======================
// PASSWORD HASH
// ======================

userSchema.pre("save", async function () {

    // Agar password change nahi hua
    // to dobara hash nahi karenge
    if (!this.isModified("password")) {
        return;
    }

    // Password ko hash karo
    this.password = await bcrypt.hash(this.password, 10);

});


module.exports = mongoose.model("User", userSchema);