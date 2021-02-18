// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const DB45 = db.collection('fellow45')
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  if (event.type === 'finish') {
    //  更新
    return await DB45.where({
      _id: _.in(event.idList)
    }).update({
      data: {
        isDone: true
      }
    })
  } else {
    // 删除
    return await DB45.where({
      _id: _.in(event.idList)
    }).remove()
  }

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}