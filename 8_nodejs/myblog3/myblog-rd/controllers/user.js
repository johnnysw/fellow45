var jwt = require('jsonwebtoken');
const userModel = require('../models/userModel')

let mySecretKey = "6723782389238923!@#$$%%^&^&";

module.exports = {
    login: async (ctx) => {
        // 1. 接数据
        let user = ctx.request.body;
        // 2. 验证
        // 3. 查数据库
        let res = await userModel.getByNameAndPwd(user.username, user.pass);
        if(res.length > 0){
            // 登录成功，生成token
            let payload = {
                userId: res[0].user_id,
                username: res[0].username
            }
            let token = jwt.sign(payload, mySecretKey, {expiresIn: '2d'});
            ctx.body = {
                state: 'success',
                token
            }
        }else{
            ctx.body = {
                state: 'fail'
            }
        }
    },
    checkLogin: async (ctx) => {
       try{
        let accessToken = ctx.header.authorization;
        jwt.verify(accessToken, mySecretKey);
        ctx.body = {
            state: 'success'
        }
       }catch(err){
        ctx.status = 401;
        ctx.body = {
            state: 'fail'
        }
       }
    }
}