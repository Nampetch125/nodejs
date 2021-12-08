const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello Petch 123';
});

app.listen(3000);S