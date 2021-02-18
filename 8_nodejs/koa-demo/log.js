// module.exports =  function () {
//   return (ctx) => {
//     console.log(ctx.method, ctx.header.host + ctx.url);
//   };
// };

let fs = require("fs");

module.exports = (ctx) => {
  return new Promise(function (reslove, reject) {
    let str = ctx.method + " " + ctx.header.host + ctx.url + "\n";
    fs.appendFile("log.txt", str, "utf-8", function () {
      fs.readFile("log.txt", "utf-8", function (err, data) {
        if(err) reject(err);
        reslove(data);
      });
    });
  });
};
