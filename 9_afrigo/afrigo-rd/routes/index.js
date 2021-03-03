const router = require('koa-router')()
const users = require('./users')
const products = require('./products')

router.use('/user', users.routes(), users.allowedMethods());
router.use('/product', products.routes(), products.allowedMethods());

module.exports = router
