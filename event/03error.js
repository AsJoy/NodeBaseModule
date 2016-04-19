"use strict";
const event = require("events");

class MyEmitter extends event {}

const me = new MyEmitter();
me.on("error", (err) => {
    console.error(err);
})
me.emit("error", new Error("haha"));

