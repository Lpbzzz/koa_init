const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const data = require('../data/echart');
// console.log('data',data)

const getRandom = (min,max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// getRandom(0.1,20)

const app = new Koa();
app.use(bodyParser());
app.use(async (ctx,next) => {
	ctx.set('Access-Control-Allow-Origin','*');
	ctx.set('Access-Control-Allow-Headers','Content-Type');
	ctx.set('Access-Control-Allow-Methods','POST');
	await next();
});
app.use(async (ctx) => {
	
	ctx.body = {
		...data,
		nodes:data.nodes.map(e => ({ ...e,x:getRandom(0.1,20),y:getRandom(0.1,20) }))
	};
});

app.listen(4000);
