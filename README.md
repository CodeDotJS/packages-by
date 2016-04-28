# packages-by

> Total published packages by an npm user.

[![Build Status](https://travis-ci.org/CodeDotJS/packages-by.svg?branch=master)](https://travis-ci.org/CodeDotJS/packages-by)

## Install 

```
	$ npm install --save packages-by
```

## Usage

```js

	const packagesBy = require('packages-by');

	packagesBy('feross').then(user => {
		console.log(user);
		/*
		name: 'Feross Aboukhadijeh',
		totalPackages: '125 Packages'
		*/
	});
```

## Related

- [twifo](https://github.com/codedotjs/twifo) : Get user information of a Twitter user.

## LICENSE

MIT &copy; [Rishi Giri](http://rishigiri.com)

