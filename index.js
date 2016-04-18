#!/usr/bin/env node

'use strict';

const got = require('got');

const cheerio = require('cheerio');

const promise = require('pinkie-promise');

module.exports = function(username) {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}
};

