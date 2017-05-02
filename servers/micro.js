'use strict';

const micro = require('micro');

const server = micro((req, res) => {
  if (req.url !== '/keep-alive') {
    res.setHeader('Connection', 'close');
  }
  return 'Hello World!';
});

server.listen(8000);
