'use strict';

const http = require('uws').http;
const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
  if (ctx.req.url !== '/keep-alive') {
    ctx.set('Connection', 'close');
  }
  ctx.body = 'Hello World!';
});

http.createServer(app.callback()).listen(8000);
