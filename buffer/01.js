var sStr = "牛元";
var bf = new Buffer(sStr,"utf8"); //存成二进制字节数组

console.log(bf)
console.log(bf.toJSON())
console.log(bf.length)  //这里的lenth是二进制数组的长度 不一定是原字符串的长度  一个英文字符表示一个字节 而中文是三个字节

var str1 = "12";
var str2 = "234"
var list = [new Buffer(str1), new Buffer(str2)];
console.log(list);
console.log (new Buffer(str1).compare( new Buffer(str2))) ;
bf = Buffer.concat(list);
console.log(bf)
console.log(bf.slice(1,4)) //这里的slice不是一种拷贝 而是指向了之前的内存地址 只是改变了起始位置 和终止位置 可以使用.copy函数来实现拷贝

console.log(new Buffer(str1)===new Buffer(str1))//比较的是内存地址
console.log(new Buffer(str1).equals(new Buffer(str1)))//比较的是内存地址
//检测buffer支持的编码
console.log(Buffer.isEncoding("utf8"));
process.stdin.on("data",function(chunk){
    console.log(chunk.slice(0,chunk.length-1)+".")
})
