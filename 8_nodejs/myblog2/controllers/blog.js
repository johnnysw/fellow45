const blogModel = require("../models/blogModel");

module.exports = {
  post: async (ctx) => {
    //  1. 接数据
    let blog = ctx.request.body;
    // 2. 验证
    // 3. 从session中获取用户编号
    blog.user_id = ctx.session.userId;
    if (blog.user_id) {
      // 4. 存入数据库
      let res = await blogModel.saveBlog(blog);
      if (res.affectedRows > 0) {
        ctx.redirect("/");
      } else {
        ctx.render("error", {
          message: "发表文章失败",
        });
      }
    }else{
      await ctx.render("error", {
        message: "未登录",
      });
    }
  },
  toPost: async (ctx) => {
    let categories = await blogModel.getBlogCategories();
    let username = ctx.session.username;
    await ctx.render("post-blog", {
      username,
      categories,
    });
  },
};
