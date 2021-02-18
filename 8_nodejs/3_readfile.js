var fs = require("fs");
/* fs.readFile("file.txt", "utf-8", function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
console.log("end.");
 */

 var res = fs.readFileSync("file.txt", "utf-8");
 console.log(res);