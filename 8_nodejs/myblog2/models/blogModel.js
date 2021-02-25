const blog = require('../controllers/blog');
const db = require('./db');


module.exports = {
    getBlogs(cateId){
        let sql = `
            select blog.blog_id, blog.title, blog.content, blog.post_time, blog.read_count, usr.username, usr.user_id
            from t_blog blog, t_user usr
            where blog.user_id=usr.user_id
        `;
        if(cateId){
            sql += ' and blog.cate_id=' + cateId
        }
        return db.query(sql);
    },
    getBlogCategories(){
        return db.query('select * from t_category');
    },
    saveBlog(blog){
        return db.query('insert into t_blog set ?', blog);
    },
    getBlogById(blogId){
        return db.query('select * from t_blog where blog_id=?', [blogId]);
    },
    getCommentsByBlogId(blogId){
        return db.query(`
            select comm.* , usr.username
            from t_comment comm, t_user usr
            where comm.user_id=usr.user_id and comm.blog_id=? order by comm.create_time desc
        `, [blogId]);
    },
    saveComment(comment){
        return db.query('insert into t_comment set ?', comment);
    }
    /* getBlogsByCateId(cateId){
        return db.query(`
            select blog.blog_id, blog.title, blog.content, blog.post_time, blog.read_count, usr.username, usr.user_id
            from t_blog blog, t_user usr
            where blog.user_id=usr.user_id and blog.cate_id=?
        `, [cateId]);
    }, */
}