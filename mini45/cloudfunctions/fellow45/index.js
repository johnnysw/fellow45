// 云函数入口文件
const cloud = require('wx-server-sdk') //依赖包，让当前的云函数支持小程序的语法

cloud.init();//初始化云函数
const db = cloud.database();//初始化数据库【注意:不用加 wx】
const DB45 = db.collection('fellow45');//获取集合


// 云函数入口函数
exports.main = async (event, context) => {
  // 通过 event来获取前端传递的参数
  console.log(event);
  let res = await DB45.get();
  return {
    res
  }
}