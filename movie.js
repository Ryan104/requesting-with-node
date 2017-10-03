'use strict'
const request = require('request');
const { googleApiKey, googleAppId } = require('./env');

const URL = `https://www.googleapis.com/customsearch/v1?key=${googleApiKey}&cx=${googleAppId}&q=`;

const get = (movieTitle) => {
	const movieURL = URL + movieTitle.split(' ').join('+') + '+movie';
	console.log(movieURL);
	request(movieURL, (error, response, body)=>{
		try {
			let items = JSON.parse(body).items;
			items.forEach((item)=>{
				console.log('title: ' + item.title);
				console.log('snippet: ' + item.snippet);
			});
		} catch (e) {
			console.log('ERROR: ' + e);
		}
	});
};

get('space jam');

module.exports = get;
