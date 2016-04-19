"use strict";
const  myEmmit = require("./MyEmitter");

var me = new myEmmit();
me.once("qwe", () => {
    console.log(123);
});
/* 只会执行一次 剩余的自动忽略 */
me.emit("qwe")
me.emit("qwe")
me.emit("qwe")