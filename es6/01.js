"use strict";
var fs = require("fs");
let a =1;
console.log(a)
fs.readFile("../package.json",null, (err,item)=>{
    console.log(err)
    console.log(item+"")
})
