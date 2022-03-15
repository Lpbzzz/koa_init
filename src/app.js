const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const data = require('../data/echart');
// console.log('data',data)

const app = new Koa();
app.use(bodyParser());
app.use(async (ctx, next)=> {
	ctx.set('Access-Control-Allow-Origin', '*');
	ctx.set('Access-Control-Allow-Headers', 'Content-Type');
	ctx.set('Access-Control-Allow-Methods', 'POST');
	await next();
  });
app.use(async (ctx) => {
	ctx.body = data
});

app.listen(4000);
