/**
 * Created by Administrator on 2016/3/22.
 */
var fs = require ("fs");
fs.mkdir ("test",function () {
    fs.writeFile ('test/1.json' , "{\"hello\":\"hello\"}" , function (err,fd) {
        if (err) {
            console.log("error")
        }else{
            console.log("success")
        }
    })
    fs.readFile("1.json" , null , function (err,fd1) {
        console.log ( JSON.parse (fd1) );
    })
    fs.appendFile("1.txt",";",function(err){
        if (err) {
            console.log("failed")
        } else {
            console.log(arguments)
        }
    })

    /* 图片迁移 */
    fs.link("1.txt","2.txt",function(){
        console.log("aaaa")
        console.log(arguments)
    })

    fs.rmdir("test",function(){
        console.log(arguments)
    })

    fs.unlink("1.json",function(){
        console.log("123",arguments)
    })
})
