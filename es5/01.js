"use strict";

var fs = require("fs");
var a = 1;
console.log(a);
fs.readFile("../package.json", null, function (err, item) {
    console.log(err);
    console.log(item + "");
});
//# sourceMappingURL=01es5.js.map
