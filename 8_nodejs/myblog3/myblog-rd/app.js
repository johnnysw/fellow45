const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('@koa/cors');
const index = require('./routes')
const session = require('koa-session')


// 配置session安全密钥
app.keys = ['123454679@#$%^&'];
// 加载session中间件
app.use(session(app));

// 处理跨域
// app.use(async (ctx, next) => {
//   ctx.set("Access-Control-Allow-Origin", "*")
//   // next继续执行下一个中间件
//   await next()
// })
app.use(cors());

// error handler
onerror(app)
 
// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
