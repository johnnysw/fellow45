var jwt = require('jsonwebtoken');

let mySecretKey = "6723782389238923!@#$$%%^&^&";

module.exports = {
  verify: async (ctx, next) => {
    try {
      let accessToken = ctx.header.authorization;
      jwt.verify(accessToken, mySecretKey);
      await next(); //这块必须加await！！！！！
    } catch (err) {
      console.log(err);
      ctx.status = 401;
      ctx.body = {
        state: "fail",
      };
    }
  },
};
