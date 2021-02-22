const Router = require("@koa/router");
const mysql = require("mysql");
const router = new Router();

// 配置数据库连接池
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "myblog",
});

function query(sql, params) {
  return new Promise(function (resolve, reject) {
    pool.getConnection(function (err, connection) {
      if (err) reject(err); // not connected!
      connection.query(sql, params, function (error, results, fields) {
        connection.release();
        if (error) reject(emyrror);
        resolve(results);
      });
    });
  });
}

router.get("/", async (ctx) => {
  await ctx.render("index");
});

router.get("/regist", async (ctx) => {
  await ctx.render("regist");
});

router.post("/regist", async (ctx) => {
  // 1. 接收数据
  let user = ctx.request.body; // {username: 'lisi', pass: '1234', tel: '51525252'}
  // 2. 验证
  if (user.username == "") {
    ctx.body = "请输入用户名!";
    return;
  }
  // 3. 连接数据库
  // 3.1 验证用户名在数据库中是否已经存在
  let res = await query("select * from t_user where username=?", [
    user.username,
  ]);
  if (res.length > 0) {
    ctx.body = "该用户已存在";
    return;
  } else {
    // 3.2 将用户信息存入数据库
    let res = await query('insert into t_user set ?', user);
    if(res.affectedRows > 0){
        ctx.body = '注册成功'
    }else{
        ctx.body = '注册失败'
    }
  }
});

module.exports = router;
