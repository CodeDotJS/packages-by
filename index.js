'use strict';

const got = require('got');
const cheerio = require('cheerio');

module.exports = username => {
	const url = `https://npmjs.com/~${username}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);

		return {
			count: $('.ph1').text().trim()
		};
	}).catch(err => {
		if (err) {
			err.message = `${username} is not a npm user`;
		}
		return err.message;
	});
};
