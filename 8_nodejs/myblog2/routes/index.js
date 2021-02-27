const router = require('koa-router')()
const user = require('./users')
const blog = require('./blogs')
const welcome = require('../controllers/index')

router.get('/', welcome.index);

router.get('/postMessage', async (ctx) => {
    let username = ctx.session.username;
    if(username){
        ctx.body = 'ok....'
    }else{
        ctx.body = 'no ok...';
    }
});


router.use('/user', user.routes(), user.allowedMethods())
router.use('/blog', blog.routes(), blog.allowedMethods())

module.exports = router
