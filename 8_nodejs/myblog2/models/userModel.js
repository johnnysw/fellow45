const db = require('./db')

module.exports = {
    getByName(username){
        return db.query("select * from t_user where username=?", [username]);
    },
    saveUser(user){
        return db.query("insert into t_user set ?", user);
    },
    getByNameAndPass(username, pass){
        return db.query('select * from t_user where username=? and pass=?', [username, pass])
    }
}