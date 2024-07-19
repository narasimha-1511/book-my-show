const router = require("express").Router();
const Movie = require("../models/movieModel");

// Add a Movie

router.post("/add-movie", async (req, res) => {
  // implement the add movie functionality
});

// Get all the movies

router.get("/get-all-movies", async (req, res) => {
  // implement the get all movies functionality
});

// Update a movie

// Update a movie
router.put("/update-movie", async (req, res) => {
  // implementing the update movie over here
});

router.put("/delete-movie", async (req, res) => {
  // deletingh a movie over here
});

// Fetch single movie by id
router.get("/movie/:id", async (req, res) => {
  // implement the get single movie by id functionality
});

module.exports = router;
