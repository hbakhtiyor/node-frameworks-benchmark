'use strict';

const express = require('express');
const http = require('uws').http;

const app = http.getExpressApp(express);

app.get('/', (req, res) => {
  res.set('Connection', 'close');
  res.send('Hello World!');
});

app.get('/keep-alive', (req, res) => {
  res.send('Hello World!');
});

http.createServer(app).listen(8000, () => {
  console.log('Example app listening on port 8000!');
});
