const router = require("express").Router();

const Show = require("../models/showModel");

// Add Show
router.post("/add-show", async (req, res) => {
  // implement the add show functionality
});

router.post("/get-all-shows-by-theatre", async (req, res) => {
  // implement the get all shows by theatre functionality
});

router.post("/delete-show", async (req, res) => {
  // implement the delete show functionality
});

// Update mshow
router.put("/update-show", async (req, res) => {
  // implement the update show functionality
});

// Get all theatres by movie which has some shows
router.post("/get-all-theatres-by-movie", async (req, res) => {
  // implement the get all theatres by movie functionality
});

router.post("/get-show-by-id", async (req, res) => {
  // implement the get show by id functionality
});

module.exports = router;
