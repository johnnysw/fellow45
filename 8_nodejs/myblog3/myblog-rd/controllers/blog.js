const blogModel = require('../models/blogModel')

module.exports = {
    listBlogs: async (ctx) => {
        // 查数据库

        let blogs = await blogModel.getBlogs();
        let categories = await blogModel.getCategories()

        ctx.body = {
            state: 'success',
            blogs,
            categories
        }
    },
    getBlog: async (ctx) => {
        let blogId = ctx.query.blogId;
        // 查数据库
        let res = await blogModel.getBlogById(blogId);
  
        ctx.body = {
            state: 'success',
            blog: res[0]
        }
    }
}