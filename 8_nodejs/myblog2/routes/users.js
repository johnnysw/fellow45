const router = require('koa-router')()

router.get('/regist', async ctx => {
  await ctx.render('regist');
});

module.exports = router
