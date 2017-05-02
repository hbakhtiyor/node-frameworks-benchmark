'use strict';

const http = require("http");

http.createServer((req, res) => {
	if (req.url !== '/keep-alive') {
		res.setHeader('Connection', 'close');
	}
	res.setHeader('Content-Length', '12');
	res.end('Hello World!');
}).listen(8000);
