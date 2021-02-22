const mysql = require("mysql");

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

/**
 * model中的代码都是和数据库相关的操作
 * 命名规范：
 * 1. get: 查询操作
 * 2. save: 插入操作
 * 3. update: 修改操作
 * 4. delete: 删除操作
 */
module.exports = {
    getUsers(){
        return query('select * from t_user');
    },
    getByNameAndPass(username, pass){
      return  query("select * from t_user where username=? and pass=?", [username,pass]);
    },
    getByName(username){
       return query("select * from t_user where username=?", [username]);
    },
    saveUser(user){
       return query("insert into t_user set ?", user);
    }
}