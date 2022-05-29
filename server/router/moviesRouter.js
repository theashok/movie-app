const express = require("express");
const router = express.Router();
const Movies = require("../models/Movies");

/* Get all Movies*/
router.get("/list", async (request, response) => {
  try {
    let movies = await Movies.find().limit(-1).skip(10).next();
    response.status(200).json(movies);
  } catch (error) {
    response.status(500).json(error);
  }
});

module.exports = router;
