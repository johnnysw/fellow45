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


var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "myblog",
});

function query(sql, params) {
  return new Promise(function (resolve, reject) {
    pool.getConnection(function(err, connection) {
        if (err) reject(err); // not connected!
        connection.query(sql, params , function (error, results, fields) {
          connection.release();
          if (error) reject(error);
          resolve(results)
        });
      });
  });
}

router.get("/userlist", async (ctx) => {
    let username = 'lisi',
        pass = '123456';
  let results = await query("select * from t_user where username=? and pass=?", [username, pass]);
  await ctx.render("user-list", {
    users: results,
  });
});

router.get("/bloglist", async (ctx) => {
  let results = await query("select * from t_blog");
  await ctx.render("blog-list", {
    blogs: results,
  });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
