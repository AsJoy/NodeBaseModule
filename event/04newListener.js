"use strict";
var myEmitter = require("./MyEmitter");

const me = new myEmitter();

me.on("newListener", (event, listener) => {
    //每次添加时间到 me 中 都会触发 newListener事件
    console.log(event,listener);
});
me.on("h1", () => {

});
me.on("h1", () => {
    
});

