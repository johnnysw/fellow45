const auth = require("../auth");
const userModel = require("../models/userModel");

module.exports = {
  signin: async (ctx, next) => {
    try {
      // 1. 接数据
      let user = ctx.request.body;

      // 2. 验证
      if(!user.pass){
        ctx.status = 400;
        return;
      }

      let res = await userModel.getByTelAndPass(user.tel, user.pass);
      if (res.length > 0) {
        let token = await auth.createToken(res[0]);
        ctx.body = {
          state: "success",
          token,
        };
      }else{
        // ctx.status = 404; 
        ctx.body = {
          state: "fail",
          // message: '库存不够',
          status: 10002 //自定错误码
        }
      }
    } catch (err) {
      console.log(err);
    }
  },
  listCart: async (ctx) => {
    ctx.body = 'list cart...';
  }
};
