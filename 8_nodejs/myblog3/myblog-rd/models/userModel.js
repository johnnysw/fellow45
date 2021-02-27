const db = require('./db')

module.exports = {
    getByNameAndPwd(username, pass){
        return db.query('select * from t_user where username=? and pass=?', [username, pass]);
    }
}