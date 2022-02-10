var Koa = require("koa");
var bodyParser = require("koa-bodyparser");

var app = new Koa();
app.use(bodyParser());

app.use(async (ctx) => {
	ctx.body = ctx.request.body;
});

app.listen(4000);
