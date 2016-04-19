"use strict";

const str = require("./Readable");

const rd = new str();

console.log(rd.isPaused());
rd.pause();
console.log(rd.isPaused());
rd.resume();
console.log(rd.isPaused());

rd.on("error", function (err) {
    console.log(err);
})



