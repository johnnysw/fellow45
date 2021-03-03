const router = require('koa-router')()
const user = require('../controllers/user')

router.post('/signin', user.signin)


module.exports = router
