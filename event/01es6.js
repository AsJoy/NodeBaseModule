"use strict";
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}
const me = new MyEmitter();
me.on("event", (a, b) => {
    // 使用es6时 this 是一个空的对象 但是es5下可以访问
    console.log(a,b, this);
    setImmediate(function () {
        console.log("this is async")
    })
});

me.on("event", (a, b) => {
    // 使用es6时 this 是一个空的对象 但是es5下可以访问
    console.log(a,b, this);
});
me.emit("event",1,2);
me.emit("event",1,2);


module.exports = MyEmitter;




