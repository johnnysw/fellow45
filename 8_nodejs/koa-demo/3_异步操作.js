const Koa = require("koa");
const app = new Koa();


app.use((ctx) => {
  setTimeout(function(){
    ctx.body = 'hello';

  }, 2000);

  ctx.body = 'world';
});

app.listen(3000);
console.log("[demo] start-quick is starting at port 3000");
