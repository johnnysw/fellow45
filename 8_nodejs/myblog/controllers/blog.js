const blogModel = require("../models/blogModel");

module.exports = {
  blogList: async (ctx) => {
    //    1. 连接数据库
    let blogs = await blogModel.getBlogs();

    let newBlogs = blogs.map(function (blog) {
        let postTime = blog.post_time;
        let postTimeStr = postTime.getFullYear() + '-' + (postTime.getMonth() + 1) + '-' + postTime.getDate()
        blog.post_time = postTimeStr;
        return blog;
    });

    await ctx.render("blog-list", {
      blogs: newBlogs,
    });
  },
};
