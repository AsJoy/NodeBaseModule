"use strict";

const fs =  require("fs");

var oRead = fs.createReadStream("1.txt");
oRead.on("data", function (chunk) {
    oRead.pause();
    console.log(new Date().getTime());
    // 停止读取 剩余的东西接下来继续读取
    setTimeout(function () {
        oRead.resume();
    })
});

oRead.on("end", () => {
    console.log("end");
});


