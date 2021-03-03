const router = require('koa-router')()
const product = require('../controllers/product')

router.get('/getProducts', product.getProducts)

module.exports = router
