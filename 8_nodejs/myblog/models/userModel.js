const db = require('./db');
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
        return db.query('select * from t_user');
    },
    getByNameAndPass(username, pass){
      return  db.query("select * from t_user where username=? and pass=?", [username,pass]);
    },
    getByName(username){
       return db.query("select * from t_user where username=?", [username]);
    },
    saveUser(user){
       return db.query("insert into t_user set ?", user);
    }
}