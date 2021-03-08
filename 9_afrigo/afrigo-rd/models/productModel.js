const db = require('./db')

module.exports = {
    getProducts(offset, pageSize){
        return db.query(`SELECT * FROM t_product LIMIT ${offset}, ${pageSize}`);
    },
    getProductsCount(){
        return db.query('select count(*) total_count from t_product');
    },
    getProductImgs(productId){
        return db.query('select * from t_product_img where prod_id=?', [productId]);
    },
    getProduct(productId){
        return db.query('select * from t_product where prod_id=?', [productId])
    }
}