const router = require('koa-router')()
const user = require('./users')
const blog = require('./blogs')

router.use('/user', user.routes(), user.allowedMethods())
router.use('/blog', blog.routes(), blog.allowedMethods())

module.exports = router
