// 将浏览器的屏幕进行等分 一份就是1rem
// fontSize = clientWidth / n + 'px'

(function(doc, win) {
  var docEl = doc.documentElement, // 获取html元素
    //orientationChange 移动端safari浏览器支持 切换横竖屏事件
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function() {
      // document.documentElement.clientWidth 浏览器窗口文档显示区域的宽度，不包括滚动条
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth > 750) {
        clientWidth = 750;
      }
      // docEl.style.fontSize = (clientWidth / 375) * 100 + 'px';
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    }; //以iPhone6为基准  body 100px rem=size/100 红包页面以iphone6为基准

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  //DOMContentLoaded dom内容加载完毕
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);