const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello Wittawat Hormhuan';
});

app.listen(3000);