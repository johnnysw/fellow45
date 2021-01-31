// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database(); //初始化数据库【注意:不用加 wx】
const DB45 = db.collection('fellow45'); //获取集合
// 云函数入口函数
exports.main = async (event, context) => {
  let res = await DB45.where({
    isShow: true
  }).update({
    data: {
      isShow: false
    }
  })
  return {
    res
  }
}