'use strict';

const http = require("uws").http;

http.createServer((req, res) => {
	if (req.url !== '/keep-alive') {
		res.writeHead('Connection', 'close');
	}
	res.end('Hello World!');
}).listen(8000);
