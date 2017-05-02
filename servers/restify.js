'use strict';

const restify = require('restify');

const server = restify.createServer();

server.get('/', (req, res, next) => {
	res.set('Connection', 'close');
  res.send('Hello World!');
  next();
});

server.get('/keep-alive', (req, res, next) => {
  res.send('Hello World!');
  next();
});

server.listen(8000, () => {
  console.log('%s listening at %s', server.name, server.url);
});
