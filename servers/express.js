'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.set('Connection', 'close');
  res.send('Hello World!');
});

app.get('/keep-alive', (req, res) => {
  res.send('Hello World!');
});

app.listen(8000, () => {
  console.log('Express demo app listening on port 8000!');
});
