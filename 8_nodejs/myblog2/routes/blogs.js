const router = require('koa-router')()
const blog = require('../controllers/blog')

router.get('/post', blog.toPost);

router.post('/doPost', blog.post);

router.get('/detail/:blogId', blog.detail);

router.post('/postComment', blog.postComment);

module.exports = router
