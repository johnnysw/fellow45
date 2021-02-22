const userModel = require('../models/userModel');

module.exports = {
  login: async (ctx) => {
    // 1. 接收数据
    let user = ctx.request.body;
    // 2. 验证
    if (user.username == "") {
      await ctx.render("error", {
        message: "请输入用户名!",
      });
    }
    // 3. 连接数据库
    let res = await userModel.getByNameAndPass(user.username, user.pass);
    // 4. 响应给用户不同的结果
    if (res.length > 0) {
      await ctx.render("index");
    } else {
      await ctx.render("error", {
        message: "用户名或密码不正确!",
      });
    }
  },
  regist: async (ctx) => {
    try {
      // 1. 接收数据
      let user = ctx.request.body; // {username: 'lisi', pass: '1234', tel: '51525252'}
      // 2. 验证
      if (user.username == "") {
        await ctx.render("error", {
          message: "请输入用户名!",
        });
      }
      // 3. 连接数据库
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
          ctx.body = "注册成功";
        } else {
          await ctx.render("error", {
            message: "注册失败!",
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  },
  userList: async (ctx) => {
    // 1. 连接数据库
    let res = await userModel.getUsers();
    // 2. 响应给用户不同的结果
    await ctx.render("user-list", {
        users: res
    });
  }
};
