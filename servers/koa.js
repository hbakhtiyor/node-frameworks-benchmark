'use strict';

const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
  if (ctx.req.url !== '/keep-alive') {
    ctx.set('Connection', 'close');
  }
  ctx.body = 'Hello World!';
});

app.listen(8000);
