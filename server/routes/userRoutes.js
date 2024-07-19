const express = require("express");
const User = require("../models/userModel");
const authMiddleware = require("../middlewares/authMiddleware");
const EmailHelper = require("../utils/emailSender");

const router = express.Router();

//Function for otp generation

const otpGenerator = function () {
  return Math.floor(Math.random() * 10000 + 90000);
};

router.post("/register", async (req, res) => {
  // implement the register functionality
});

router.post("/login", async (req, res) => {
  // implement the login functionality
});

// router-level-middleware

router.get("/get-current-user", authMiddleware, async (req, res) => [
  // implement the get current user functionality
]);

// forgot password

router.patch("/forgetpassword", async function (req, res) {
  // IMPLEMENT THE FORGOT PASSWORD FUNCTIONALITY
});

router.patch("/resetpassword", async function (req, res) {
  // IMPLEMENT THE RESET PASSWORD FUNCTIONALITY
});

module.exports = router;
