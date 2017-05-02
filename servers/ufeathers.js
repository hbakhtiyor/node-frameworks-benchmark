'use strict';

const http = require('uws').http;
// const express = require('express');
const feathers = require('feathers');

// const app = feathers();

// const mainApp = http.getExpressApp(express).use('/', app);
const app = http.getExpressApp(feathers);

app.use('/', (req, res) => {
	res.set('Connection', 'close');
	res.send('Hello World!');
});

app.use('/keep-alive', (req, res) => {
	res.send('Hello World!');
});

const server = http.createServer(app/*mainApp*/).listen(8000, () => {
  console.log('uFeathers demo app listening on port 8000!');
});

app.setup(server);
