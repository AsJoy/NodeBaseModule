process.on("exit",function (code) {
    setTimeout(function(){
       console.write("this will not run");
    },0)
    console.log("run this"+code)
})
throw  new SQLException("111");