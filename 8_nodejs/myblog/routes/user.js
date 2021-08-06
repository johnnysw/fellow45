const Router = require("@koa/router");
const user = require('../controllers/user');

const router = new Router();


router.get("/login", async (ctx) => {
  await ctx.render("login.ejs");
});

router.get("/regist", async (ctx) => {
  await ctx.render("regist");
});

router.get("/list", user.userList);

router.post("/login", user.login);

router.post("/regist", user.regist);


module.exports = router;