const auth = require("../auth");
const userModel = require("../models/userModel");

module.exports = {
  signin: async (ctx, next) => {
    try {
      let user = ctx.request.body;

      let res = await userModel.getByTelAndPass(user.tel, user.pass);
      if (res.length > 0) {
        let token = await auth.createToken(res[0]);
        console.log(token);
        ctx.body = {
          state: "success",
          token,
        };
      }
    } catch (err) {
      console.log(err);
    }
  },
};
