const router = require('koa-router')()
const blog = require('../controllers/blog')

router.get('/list', blog.listBlogs);

router.get('/detail', blog.getBlog);

module.exports = router
