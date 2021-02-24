const mysql = require("mysql");

// 配置数据库连接池
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "myblog",
});

module.exports = {
  query: function (sql, params) {
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
};
