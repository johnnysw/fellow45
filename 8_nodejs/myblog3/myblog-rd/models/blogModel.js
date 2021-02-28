const db = require('./db')

module.exports = {
    getBlogs(){
        return db.query(`
            SELECT blog.blog_id as blogId, blog.title, blog.content, blog.post_time as postTime, blog.read_count as readCount, usr.username
            FROM t_blog blog, t_user usr
            WHERE blog.user_id = usr.user_id
        `);
    },
    getCategories(){
        return db.query(`
            select cate_id as cateId, cate_name as cateName from t_category
        `);
    },
    getBlogById(blogId){
        return db.query(`
            select * from t_blog where blog_id=?
        `, [blogId]);
    },
    getCategories(){
        return db.query('select * from t_category');
    },
    saveBlog(blog){
        return db.query('insert into t_blog set ?', blog);
    }
}