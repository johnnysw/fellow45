const Koa = require("koa");
const router = require('./routes')
const views = require("koa-views");
const serve = require('koa-static');
const path = require("path");
var bodyParser = require('koa-bodyparser');

const app = new Koa();
// 配置bodyParser
app.use(bodyParser());
// 配置静态资源文件路径
app.use(serve(__dirname + '/public'));
// 加载模板引擎
app.use(
  views(path.join(__dirname, "./views"), {
    extension: "ejs",
  })
);

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log("[demo] start-quick is starting at port 3000");
