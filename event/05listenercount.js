"use strict";
var myEmitter = require("./MyEmitter");

const me = new myEmitter();

me.on("h1", () => {

});
me.on("h1", () => {

});

// 获取listenerCount的数量

console.log(me.listenerCount("h1"));