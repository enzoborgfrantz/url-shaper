# url-shaper
A library for simplifying url construction

## Description

This module exports a function which expects two parameters:

1. A string containing the url path
2. An object containing query parameters

Outputs a url made up of the concatenated path and the query parameters.

## Notes:

> If the path provided does not contain a forward slash after the domain, this is automatically resolved

> Any keys or values in the query parameters object equal to: null, 'null', undefined, 'undefined' are ommitted.

## Example 

```javascript
import urlShaper from 'url-shaper';

const path = 'http://www.test.com'; // the slash '/' after .com be automatically resolved

const queryParameters = {
	name: 'John',
	age: 16,
	registered: true,
	null: 1, // will be ommitted
	undefined: 2, // will be ommitted
	city: null, // will be ommitted
	country: undefined, // will be ommitted
};

const url = urlShaper(path, queryParameters);		

// url: 'http://www.test.com/?name=John&age=16&registered=true'
```

### [Code](https://github.com/enzoborgfrantz/url-shaper/blob/master/src/urlShaper.js)

### [Tests](https://github.com/enzoborgfrantz/url-shaper/blob/master/test/urlShaper.test.js)
