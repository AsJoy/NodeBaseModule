"use strict";
const Stream = require("stream");
const util = require("util");

const str = function () {
    Stream.Readable.call(this)
}
util.inherits(str, Stream.Readable);




module.exports = str;