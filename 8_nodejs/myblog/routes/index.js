const Router = require("@koa/router");
const user = require('../controllers/user');
const blog = require('../controllers/blog')

const router = new Router();

router.get("/", async (ctx) => {
  await ctx.render("index");
});

router.get("/login", async (ctx) => {
  await ctx.render("login");
});

router.get("/regist", async (ctx) => {
  await ctx.render("regist");
});

router.get("/userlist", user.userList);

router.post("/login", user.login);

router.post("/regist", user.regist);

router.get('/bloglist', blog.blogList);

module.exports = router;
