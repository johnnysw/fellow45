const blogModel = require("../models/blogModel");

module.exports = {
  listBlogs: async (ctx) => {
    // 查数据库

    let blogs = await blogModel.getBlogs();
    let categories = await blogModel.getCategories();

    ctx.body = {
      state: "success",
      blogs,
      categories,
    };
  },
  getBlog: async (ctx) => {
    let blogId = ctx.query.blogId;
    // 查数据库
    let res = await blogModel.getBlogById(blogId);
    
    ctx.body = {
      state: "success",
      blog: res[0],
    };
  },
  getCategories: async (ctx) => {
    let categories = await blogModel.getCategories();
    ctx.body = {
      state: "success",
      categories,
    };
  },
  postBlog: async (ctx) => {
    try {
      // 1. 接数据
      let blog = ctx.request.body;
      blog.user_id = 1;
      // 2. 存数据
      let res = await blogModel.saveBlog(blog);
      if (res.affectedRows > 0) {
        ctx.body = {
          state: "success",
        };
      } else {
        ctx.body = {
          state: "fail",
        };
      }
    } catch (err) {
      console.log(err);
    }
  },
};
