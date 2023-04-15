const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  // Check for token inside of header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from the header
      token = req.headers.authorization.split(" ")[1];

      // Verify the token with jwt
      const decoded = jwt.verify(token, process.env.SECRET);

      // Find the use by the id payload
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (err) {
      console.log(err);
      res.status(401);
      throw new Error(`401 not authorized`);
    }
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, there is no token present.");
    }
  }
});

module.exports = {protect};