let fs = require("fs");

function getData() {
  return new Promise(function (resolve, reject) {
    fs.readFile("log.txt", "utf-8", function (err, data) {
      if (err) reject(err);
      resolve(data);
    });
  });
}

async function test() {
  var data2 = await getData();

  console.log(data2);
}

test();
