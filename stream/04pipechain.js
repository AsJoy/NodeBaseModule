"use strict";

const fs = require("fs");
const zlib = require("zlib");


var oRead = fs.createReadStream("1.txt");
var oZlib = zlib.createGzip();
var oWrite = fs.createWriteStream("3.txt");
oRead.setEncoding("utf8");
oZlib.setEncoding("utf8");
oRead.pipe(oZlib).pipe(oWrite);