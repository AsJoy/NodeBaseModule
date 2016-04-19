/**
 * Created by Administrator on 2016/3/20.
 */
var fs = require("fs");

fs.open("1.txt","r+",function(err,fd){
    var bf = new Buffer(10);
    var bf1 = new Buffer("123");
    fs.read(fd,bf,0,10,0,function(err,length,fd1){
        console.log(fd1+"");
    })
    fs.write(fd,bf1,1,1,33,function(err,length,fd1){
        console.log(fd1+"")
    })

    fs.close(fd,function (err) {
        if(err){
            console.log(err);
        }
    })
})

