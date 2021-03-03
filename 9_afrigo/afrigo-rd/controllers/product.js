const produtModel = require('../models/productModel')

module.exports = {
    getProducts: async (ctx) => {
        
        let {pageNum, pageSize} = ctx.query;

        console.log(pageNum, pageSize);

        let res1 = await produtModel.getProductsCount();
        // 算一共分多少页
        let totalPage = Math.ceil(res1[0].total_count / pageSize);

        let res = await produtModel.getProducts((pageNum-1)*5, pageSize);

        if(res.length > 0){
            ctx.body = {
                state: 'success',
                list: res,
                totalPage
            }
        }
    }
}