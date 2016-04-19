process.stdout.write("请输入a的值：")
var a;
var b;
process.stdin.on("readable",function(){
    //console.log("read");
    var item = process.stdin.read ();
    //console.log (item.toString());
    if(!a){
        a = Number (item.toString());
        process.stdout.write("请输入b的值：")
    }else{
        b = Number (item.toString());
        console.log ("a+b的结果为："+ (a + b) )
    }
})