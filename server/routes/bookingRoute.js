const router = require("express").Router();
const express = require("express");
const stripe = require("stripe")(
  "sk_test_51JKPQWSJULHQ0FL7LbqLKOaIcjurlUcdP2hJQkXZw3txlhh0hFrEEEOTwdVxf6sWKqLIrerKpV5EfGvmvntYu7Mt00vJq4YQKL"
);
const authMiddleware = require("../middlewares/authMiddleware");
const Booking = require("../models/bookingModel");
const Show = require("../models/showModel");
const EmailHelper = require("../utils/emailSender");

const endpointSecret =
  "whsec_774b9109545b45e18af845534afa4e7e0d144a1a57db46482ca7886c10cd5a5a";

// Webhook endpoint
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (request, response) => {
    //implement the webhook functionality
  }
);

// Function to handle payment_intent.succeeded event
async function handlePaymentIntentSucceeded(paymentIntent) {
  console.log("Succesfull");
  console.log(paymentIntent);
}

router.post("/make-payment", async (req, res) => {
  // implement the make payment functionality
});

// Create a booking after the payment
router.post("/book-show", async (req, res) => {
  // implement the book show functionality
});

router.get("/get-all-bookings", authMiddleware, async (req, res) => {
  // implement the get all bookings functionality
});

module.exports = router;
