const Koa = require("koa");
const mysql = require("mysql");
const Router = require("@koa/router");
const views = require("koa-views");
const path = require("path");
const app = new Koa();

// 配置路由
const router = new Router();

// 加载模板引擎
app.use(
  views(path.join(__dirname, "./views"), {
    extension: "ejs",
  })
);

function getData() {
  return new Promise(function (resolve, reject) {
    var connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "myblog",
    });

    connection.connect();

    connection.query("select * from t_user", async function (error, results) {
      if (error) reject(error);
      resolve(results);
    });

    connection.end();
  });
}

router.get("/userlist", async (ctx) => {
  let results = await getData();
  await ctx.render("user-list", {
    users: results,
  });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
