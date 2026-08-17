const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    // 1. Authorization header check
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Authorization token required"
        });
    }

    // 2. Header se token nikalna
    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Token missing"
        });
    }

    try {

        // 3. JWT verify
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // 4. User information request me store karna
        req.user = decoded;

        // 5. Next middleware/controller
        next();

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });

    }

};

module.exports = authMiddleware;