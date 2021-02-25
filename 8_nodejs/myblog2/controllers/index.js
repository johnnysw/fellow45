const blogModel = require("../models/blogModel");

module.exports = {
  index: async (ctx) => {
    // 1. 接数据
    let cateId = ctx.query.cateId;
    // 1. 查询文章信息
    let blogs = [];
    if (cateId) {
      // blogs = await blogModel.getBlogsByCateId(cateId);
      blogs = await blogModel.getBlogs(cateId);
    } else {
      blogs = await blogModel.getBlogs();
    }

    // 2. 查询文章分类信息
    let categories = await blogModel.getBlogCategories();

    let uname = ctx.session.username;
    await ctx.render("index", {
      username: uname,
      blogs,
      categories,
    });
  },
};
