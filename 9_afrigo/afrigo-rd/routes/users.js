const router = require('koa-router')()
const user = require('../controllers/user')
const {verifyToken} = require('../auth')

router.post('/signin', user.signin)

router.get('/cart', verifyToken, user.listCart);


module.exports = router
