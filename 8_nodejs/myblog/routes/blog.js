const Router = require("@koa/router");
const blog = require('../controllers/blog')

const router = new Router();

router.get('/list', blog.blogList);

module.exports = router;
