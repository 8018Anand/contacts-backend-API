const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token = null;
  let authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("user is not authorized");
      }
      console.log(decoded.user);
      req.user = decoded.user;
      next();
    });
  }
  if (!token) {
    res.status(401);
    throw new Error("user is not authorized or token is missing");
  }
});

module.exports = validateToken;
