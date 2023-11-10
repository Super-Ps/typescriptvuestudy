//TypeScript 里的类型注解是一种轻量级的为函数或变量添加约束的方式
// 理解为给参数约束了类型，按照指定的类型
function greeter(b) {
    return 'a' + b;
}
function greeterb(b) {
    return ['a' + b];
}
let user = 'jonny';
const mbers = 1;
greeter(user);
greeter(mbers);
console.log(greeter(user));
console.log(greeter(user));
console.log(greeter(user));
// 1). 生成配置文件tsconfig.json
//     tsc --init
// 2). 修改tsconfig.json配置
//     "outDir": "./js",
//     "strict": false,    
// 3). 启动监视任务: 
//     终端 -> 运行任务 -> 监视tsconfig.json
//       也可以直接执行  tsc  -w    ，用来监控TS文件变化后自动编译成js文件
