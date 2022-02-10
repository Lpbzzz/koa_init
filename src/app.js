var Koa = require("koa");
var bodyParser = require("koa-bodyparser");

var app = new Koa();
app.use(bodyParser());
app.use(async (ctx, next)=> {
	ctx.set('Access-Control-Allow-Origin', '*');
	ctx.set('Access-Control-Allow-Headers', 'Content-Type');
	ctx.set('Access-Control-Allow-Methods', 'POST');
	await next();
  });
app.use(async (ctx) => {
	ctx.body = ctx.request.body;
});

app.listen(4000);
