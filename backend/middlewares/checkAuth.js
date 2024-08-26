/** @format */
const jwt = require("jsonwebtoken");
async function checkAuth(req, res, next) {
  try {
    let token;
    if (
      req.headers?.authorization &&
      req.headers?.authorization?.startsWith("Bearer")
    ) {
      token = req.headers.authorization?.split(" ")[1];
    }
    if (!token) {
      return res.status(401).json({ message: "Authentication token missing" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decodedToken;
    next();
  } catch (error) {
    console.log("Authentication error:", error);
    return res.status(401).json({ message: "Invalid or expired token", error });
  }
}

module.exports = {
  checkAuth: checkAuth,
};
