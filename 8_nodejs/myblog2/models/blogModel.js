const db = require('./db');


module.exports = {
    getBlogs(){
        return db.query('select * from t_blog');
    }
}