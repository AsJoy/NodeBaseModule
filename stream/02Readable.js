"use strict";
const fs = require("fs");

var oRead = fs.createReadStream("1.txt");
var oWrite = fs.createWriteStream("2.txt");
oRead.pipe(oWrite);
//会导致切换到flow mode
oRead.resume();
// flow mode 下 不能触发readable事件
oRead.on("readable", () => {
    console.log(oRead.read()+"");
});
oRead.on("data", function (chunk) {
    console.log( chunk);
});
oRead.on("end", function () {
});
