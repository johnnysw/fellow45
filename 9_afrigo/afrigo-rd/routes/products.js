const router = require('koa-router')()
const product = require('../controllers/product')

router.get('/getProducts', product.getProducts)

router.get('/detail', product.getProdDetail);

router.get('/question', product.getQuestions);

module.exports = router
