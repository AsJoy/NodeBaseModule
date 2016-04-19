"use strict";

let Util = require("util");
let EventEmitter = require("events");

let MyEvent = function () {
    EventEmitter.call(this)
}

Util.inherits(MyEvent, EventEmitter);

let me = new MyEvent();

me.on("fun", function () {
    // es5时可以访问this
    console.log(this);
});

me.emit("fun");