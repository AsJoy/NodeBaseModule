"use strict";
var myEmitter = require("./MyEmitter");

const me = new myEmitter();

me.addListener("data",function () {
    console.log("data")
});

me.addListener("data1", function () {
    console.log("data1");
    var iNum = this.getMaxListeners();

    this.setMaxListeners(100)
    //获取监听的函数数组
    console.log(this.listeners("data"))
    this.removeAllListeners("data");
});

me.emit("data")
me.emit("data1")
me.emit("data")




