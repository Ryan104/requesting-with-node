'use strict'
const request = require('request');
const { googleApiKey, googleAppId } = require('./env');

const URL = `https://www.googleapis.com/customsearch/v1?key=${googleApiKey}&cx=${googleAppId}&q=`;

const get = (movieTitle, page=1, imdb=false) => {

	let movieURL = URL;
	movieURL += movieTitle.split(' ').join('+') + '+movie'; 
	if(imdb) movieURL += '&siteSearch=www.imdb.com';
	movieURL += '&start=' + ((page - 1)*10 + 1);

	request(movieURL, (error, response, body)=>{
		try {
			let items = JSON.parse(body).items;
			items.forEach((item, i)=>{
				console.log('\n' + movieTitle + ' (result ' + (i+1) + '/' + items.length  +'):');
				console.log('title: ' + item.title);
				console.log('link: ' + item.link);
			});
		} catch (e) {
			console.log('ERROR: ' + e);
		}
	});
};

module.exports = get;
