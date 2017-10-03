'use strict'
const request = require('request');
const { googleApiKey, googleAppId } = require('./env');

const URL = `https://www.googleapis.com/customsearch/v1?key=${googleApiKey}&cx=${googleAppId}&q=`;

const get = (movieTitle, page=1, imdb=false) => {

	// assemble search url
	let movieURL = URL;
	movieURL += movieTitle.split(' ').join('+') + '+movie'; 
	if(imdb) movieURL += '&siteSearch=www.imdb.com';
	movieURL += '&start=' + ((page - 1)*10 + 1);

	// send the request
	request(movieURL, (error, response, body)=>{
		try {

			let parsedBody = JSON.parse(body);

			// throw errors (usage limits....)
			if(parsedBody.error) {
				throw 'code: ' + parsedBody.error.code + '\nMESSAGE: ' + parsedBody.error.message;
			}
			// Display a list of items
			let items = parsedBody.items;
			items.forEach((item, i)=>{
				console.log('\n' + movieTitle + ' (result ' + (i+1) + '/' + items.length  +'):');
				console.log('title: ' + item.title);
				console.log('link: ' + item.link);
			});
			resultCount = parsedBody.searchInformation.totalResults;

		} catch (e) {
			// display errors
			console.log('ERROR: ' + e);
		}
	});
};

module.exports = get;
