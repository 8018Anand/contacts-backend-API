const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");
const {
  registerUser,
  loginUser,
  currentUSer,
} = require("../controllers/userController");

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/currUser").get(validateToken, currentUSer);

module.exports = router;
