const mongoose = require("mongoose");

let MoviesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  genres: { type:Array, required: true },
  ratings: { type:Array, required: true },
  poster: { type: String, required: true },
  contentRating: { type: String, required: true },
  duration:{ type: String, required: true },
  releaseDate:{ type: Date, required: true },
  averageRating:{ type: Number, required: true },
  originalTitle:{ type: String, required: true },
  storyline:{ type: String, required: true },
  actors:{ type:Array, required: true },
  imdbRating:{ type:Number, required: true },
  posterurl:{ type: String, required: true },
});
let Movies = mongoose.model("movies", MoviesSchema);
module.exports = Movies;
