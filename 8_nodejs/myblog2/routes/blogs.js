const router = require('koa-router')()
const blog = require('../controllers/blog')

router.get('/post', blog.toPost);

router.post('/doPost', blog.post);

module.exports = router
