const Koa = require("koa");
const app = new Koa();

function getData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("haha");
    }, 2000);
  });
}

app.use(async (ctx) => {
  ctx.body = await getData();
});

app.listen(3000);
console.log("[demo] start-quick is starting at port 3000");
