#!/usr/bin/env node

'use strict';

var cheerio = require('cheerio');

var Promise = require('pinkie-promise');

var got = require('got');

module.exports = function (username) {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	var url = 'https://npmjs.com/~' + username;

	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);

		return {
			name: $('.fullname').text() || null,

			packages: $('#packages').text().replace(/ /g, '').replace('Packagesby', '').replace('\n', '').replace('\n', '').replace(username, '') + ' Packages' || null
		};
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'Not a Twitter User.';
		}

		throw err;
	});
};
