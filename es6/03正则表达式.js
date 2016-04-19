"use strict";

var fs = require("fs");
//可以解析 unicode编码
console.log("\u0061");

//let [a,b,c] = [1,2,3];
var str = "牛元强";
console.log(str.charCodeAt(1))
for( let i of str){
    console.log(i);
}
//反字符串 里面可以直接使用xml的标签 并可以使用 ${xxx} 动态传递数据
console.log(`
    <p>
        ${str}
    </p>
`)

// 书里面  es5 里面 '.' 操作符不能识别 unicode字符 （如中文）  es6中 后缀加入 u可以识别
// 实际 nodejs 可以识别  u暂时不支持
console.log(/^.$/.test("吉"));
//console.log(/{91}/u)

