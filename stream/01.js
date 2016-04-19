"use strict";

const http = require("http");

http.createServer(function(req, res) {
    //req is ReadAble
    //res is Response
    var body = "";
    req.on("data", function ( data) {
        console.log(data+"123")
        body += data;
    });

    req.on("end", (err) => {
        try {
            var obj = JSON.parse(body);
            console.log(obj)
        } catch (err) {
            res.statusCode = 400;
            return res.end(`err ${err.message}`);
        }
        res.write(typeof obj);
        res.end();
    });
    
}).listen(1333);