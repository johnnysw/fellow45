const db = require('./db')

module.exports = {
    getProducts(offset, pageSize){
        return db.query(`SELECT * FROM t_product LIMIT ${offset}, ${pageSize}`);
    },
    getProductsCount(){
        return db.query('select count(*) total_count from t_product');
    }
}