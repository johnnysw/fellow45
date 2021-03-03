var jwt = require("jsonwebtoken");

let mySecretKey = "6723782389238923!@#$$%%^&^&";

module.exports = {
  createToken: async (user) => {
    // 登录成功，生成token
    let payload = {
      userId: user.user_id,
      nickname: user.nickname,
    };
    let token = jwt.sign(payload, mySecretKey, { expiresIn: "2d" });
    return token;
  },
  verifyToken: async (ctx, next) => {
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
