const userModel = require("../models/userModel");

module.exports = {
  regist: async (ctx) => {
    // 1. 接收数据
    let user = ctx.request.body;
    // 2. 验证
    if(user.username == ""){
        await ctx.render('error', {
            message: '请输入用户名!'
        });
        return;
    }
    // 3.1 验证用户名在数据库中是否已经存在
    let res = await userModel.getByName(user.username);
    if (res.length > 0) {
      await ctx.render("error", {
        message: "该用户已存在!",
      });
    } else {
      // 3.2 将用户信息存入数据库
      let res = await userModel.saveUser(user);
      // 4. 响应给用户不同的结果
      if (res.affectedRows > 0) {
        //  render是渲染和加载的意思，在这里并没有真正的发生【跳转】
        // redirect重定向，是真正意义的跳转
        await ctx.redirect('/user/login');
      } else {
        await ctx.render("error", {
          message: "注册失败!",
        });
      }
    }
  },
  login: async (ctx) => {
    // 1. 接数据
    let user = ctx.request.body;
    // 2. 验证
    // 引处省略一万行
    // 3. 查数据
    let res = await userModel.getByNameAndPass(user.username, user.pass);
    // 4. 根据查询结果，响应用户页面
    if(res.length > 0){
        ctx.session.username = user.username;
        ctx.redirect('/');
    }else{
        await ctx.render('error', {
            message: '用户名或密码不正确!'
        });
    }
  }
};
