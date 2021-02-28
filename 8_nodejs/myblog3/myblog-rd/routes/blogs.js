const router = require("koa-router")();
const blog = require("../controllers/blog");
const {verify} = require('../auth')

router.get("/list", blog.listBlogs);

router.get("/detail", blog.getBlog);

router.get("/getCategories", blog.getCategories);

router.post("/post", verify, blog.postBlog);

module.exports = router;
