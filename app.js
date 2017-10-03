'use strict'
const movie = require("./movie");
const movieWar = require("./movieWar");

const threeFavoriteMovies = ["Jurrasic Park", "The Lost World Jurassic Park", "Jurrasic Park 3"];


threeFavoriteMovies.forEach(function(film){
	console.log(film);
  movie(film); // movie(movieTitle, pageNumber, imdbSearch=false))
});

