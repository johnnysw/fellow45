const db = require('./db')

module.exports = {
    getByTelAndPass(tel, pass){
        return db.query("select * from t_user where tel=? and pass=?", [tel, pass]);
    }
}