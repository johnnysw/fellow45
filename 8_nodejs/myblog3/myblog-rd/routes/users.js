const router = require('koa-router')()
const user = require('../controllers/user')

router.post('/login', user.login);

router.post('/checkLogin', user.checkLogin);

module.exports = router
