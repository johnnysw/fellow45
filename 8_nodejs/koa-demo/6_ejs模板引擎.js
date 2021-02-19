const Koa = require("koa");
const Router = require("@koa/router");
var bodyParser = require("koa-bodyparser");
const views = require("koa-views");
const path = require("path");

const app = new Koa();

// 配置bodyParser，用来接收post提交的数据
app.use(bodyParser());
// 配置路由
const router = new Router();

// 加载模板引擎
app.use(
  views(path.join(__dirname, "./views"), {
    extension: "ejs",
  })
);

router.get("/", async (ctx) => {
  await ctx.render("index", {
    title: "ejs",
    message: "hello world",
    blogs: [
      {
        title: "aaaaa",
        createTime: "2021-02-01",
      },
      {
        title: "bbbb",
        createTime: "2021-02-02",
      },
    ]
  });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
