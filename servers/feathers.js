'use strict';

const feathers = require('feathers');

const app = feathers();

app.use('/', (req, res) => {
	res.set('Connection', 'close');
	res.send('Hello World!');
});

app.use('/keep-alive', (req, res) => {
	res.send('Hello World!');
});

app.listen(8000, () => {
  console.log('Feathers demo app listening on port 8000!');
});
