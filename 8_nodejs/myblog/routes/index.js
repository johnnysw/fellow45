const Router = require("@koa/router");
const user = require("./user");
const blog = require("./blog");

const router = new Router();

router.get("/", async (ctx) => {
  await ctx.render("index");
});


router.use('/user', user.routes(), user.allowedMethods())
router.use('/blog', blog.routes(), blog.allowedMethods())

module.exports = router;
