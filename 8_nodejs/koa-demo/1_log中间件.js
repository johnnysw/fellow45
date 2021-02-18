const Koa = require("koa");
const logger = require("./log");
let fs = require('fs');

const app = new Koa();

// app.use((ctx) => {
//   ctx.body = "Hello World";
// });

app.use(async (ctx) => {
    ctx.body = await logger(ctx)
});
// app.use(  logger()  );

app.listen(3000);
console.log("[demo] start-quick is starting at port 3000");
