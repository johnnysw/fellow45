const router = require('koa-router')()
const user = require('./users')
const blog = require('./blogs')
const welcome = require('../controllers/index')

router.get('/', welcome.index);

router.use('/user', user.routes(), user.allowedMethods())
router.use('/blog', blog.routes(), blog.allowedMethods())

module.exports = router
