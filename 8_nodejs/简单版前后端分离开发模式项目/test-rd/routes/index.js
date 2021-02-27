const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})


router.get('/list', async (ctx, next) => {
  let arr = [
    'hello',
    'world'
  ]
  ctx.body= arr;
})

module.exports = router
