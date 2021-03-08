const router = require('koa-router')()
const product = require('../controllers/product')

router.get('/getProducts', product.getProducts)

router.get('/detail', product.getProdDetail);

module.exports = router
