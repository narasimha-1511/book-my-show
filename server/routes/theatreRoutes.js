const router = require("express").Router();
const Theatre = require("../models/theatreModel");

router.post("/add-theatre", async (req, res) => {
  //implement the add theatre functionality
});

// Get all theatres for Admin route
router.get("/get-all-theatres", async (req, res) => {
  //implement the get all theatres functionality
});

// Get the theatres of a specific owner
router.post("/get-all-theatres-by-owner", async (req, res) => {
  //implement the get all theatres by owner functionality
});

// Update theatre
router.put("/update-theatre", async (req, res) => {
  //implement the update theatre functionality
});

// Delete theatre
router.put("/delete-theatre", async (req, res) => {
  //implement the delete theatre functionality
});

module.exports = router;
