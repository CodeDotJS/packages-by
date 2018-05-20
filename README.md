<h1 align="center">
	P A C K A G E S - B Y
	<br>
	<a href="https://travis-ci.org/CodeDotJS/packages-by"><img src="https://travis-ci.org/CodeDotJS/packages-by.svg?branch=master"></a>
	<br>
</h1>

<p align="center"> Total packages published by a npm user!</p>

## Install

```
$ npm install --save packages-by
```

## Usage

```js
const pkgby = require('packages-by');

pkgby('rishi').then(res => {
  console.log(res);
  // { count: '78' }
});
```

## Related

- __[`packages-by-cli`](https://github.com/CodeDotJS/packages-by-cli)__ `:` `Command line tool to find total packages published by a npm user`

## LICENSE

MIT &copy; [Rishi Giri](http://rishigiri.com)

