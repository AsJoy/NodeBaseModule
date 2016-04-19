/**
 * Created by Administrator on 2016/3/18.
 */
//console.log(process.argv) //输出node的变量的 内容
//console.log(process.env) // 输出当前的环境变量
//console.log(process.env.path)
console.log(process.cwd()===__dirname)// process.cwd() 显示的当前的工作目录
process.chdir("../")//修改当前的工作目录
console.log(process.cwd()===__dirname)
console.log(process.pid)
console.log(process.title)//调用该进程的程序
console.log('This platform is ' + process.platform);
