'use strict'
const movie = require("./movie");

const threeFavoriteMovies = ["Jurrasic Park", "The Lost World Jurassic Park", "Jurrasic Park 3"];

threeFavoriteMovies.forEach(function(film){
  movie(film); // movie(movieTitle, pageNumber, imdbSearch=true or false))
});
