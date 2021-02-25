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
  detail: async (ctx) => {
    // 1. 接数据
    let blogId = ctx.params.blogId;
    // 2. 查文章
    let res = await blogModel.getBlogById(blogId)
    // 3. 查文章评论
    let comments = await blogModel.getCommentsByBlogId(blogId)

    let username = ctx.session.username;

    if(res.length > 0){
      await ctx.render('blog-detail', {
        blog: res[0],
        comments,
        username
      });
    }
  },
  postComment: async (ctx) => {
    let comment = ctx.request.body;  //{ content: 'heheeheh99999999', blog_id:9 }

    let userId = ctx.session.userId;
    if(userId){
      comment.user_id = userId;
      let res = await blogModel.saveComment(comment);
      if(res.affectedRows > 0){
        ctx.body = 'success';
      }else{
        ctx.body = 'fail'
      }
    }else{
      ctx.body = '未登录'
    }

    
  }
};
