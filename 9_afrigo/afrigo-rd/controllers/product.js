const produtModel = require("../models/productModel");

module.exports = {
  getProducts: async (ctx) => {
    let { pageNum, pageSize } = ctx.query;

    console.log(pageNum, pageSize);

    let res1 = await produtModel.getProductsCount();
    // 算一共分多少页
    let totalPage = Math.ceil(res1[0].total_count / pageSize);

    let res = await produtModel.getProducts((pageNum - 1) * 5, pageSize);

    if (res.length > 0) {
      ctx.body = {
        state: "success",
        list: res,
        totalPage,
      };
    }
  },
  getProdDetail: async (ctx) => {
    // 1. 接数据
    let productId = ctx.query.productId;
    // 2. 验证

    // 3. 连接数据库
    let res = await produtModel.getProductImgs(productId);
    let res2 = await produtModel.getProduct(productId);

    ctx.body = {
      state: "success",
      imgList: res,
      product: res2[0]
    };

    // 4. 返回结果给前端
  },
};
