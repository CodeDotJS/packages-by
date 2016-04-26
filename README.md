# packages-by

> Total published packages by an npm user.

## Install 

```
	$ npm install --save packages-by
```

## Usage

```js
	'use strict';

	const packagesBy = require('./index.js');

	packagesBy('rishi').then(user => {
		console.log(user);
		/*
		name: 'rishi',
		totalPackages: 10
		*/
	});
```

## Related

- [twifo](https://github.com/codedotjs/twifo) : Get user information of a Twitter user.

## LICENSE

MIT &copy; [Rishi Giri](http://rishigiri.com)

