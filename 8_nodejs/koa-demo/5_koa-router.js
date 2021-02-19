const Koa = require('koa')
const Router = require('@koa/router');
var bodyParser = require('koa-bodyparser');
const app = new Koa()

app.use(bodyParser());

const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'index...'
});

router.get('/todo/:name/:age', (ctx, next) => {
    // console.log(ctx.querystring);  // "name=lisi&age=23"
    // console.log(ctx.query); // { name: 'lisi', age: '23' }
    // let user = ctx.query;
    // console.log(`name: ${user.name}, age: ${user.age}`);

    // /todo/lisi/23
    let user = ctx.params; //{ name: 'lisi', age: '23' }
    console.log(`name: ${user.name}, age: ${user.age}`);
});

let html = `
    <h1>koa2 request post demo</h1>
    <form method="POST" action="/regist">
      <p>userName</p>
      <input name="userName" /><br/>
      <p>nickName</p>
      <input name="nickName" /><br/>
      <p>email</p>
      <input name="email" /><br/>
      <button type="submit">submit</button>
    </form>
  `;

router.get('/regist',  (ctx, next) => {
    ctx.body = html;
});

router.post('/regist',  (ctx, next) => {
    let user = ctx.request.body; //{ userName: '2323', nickName: '23232', email: '2323' }
    console.log(`name: ${user.userName}, nickName: ${user.nickName}`);

});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);