'use strict';

module.exports.routes = {
  '/': (req, res) => {
    res.set('Connection', 'close');
    res.send('Hello World!');
  }
};
