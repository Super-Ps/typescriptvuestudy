let isDone = false;
isDone = true;
let a1 = 10;
let a2 = 0b1010;
let ursename = 'jonny';
let u = undefined;
let n = null;
// 数组
let list1 = [1, 2, 3];
let list2 = ["a", "B", "C"];
// 第二种方式是使用数组泛型，Array<元素类型>：
let list3 = [1, 2, 4];
//元组，TUPLE，
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string 和 number 类型的元组。
let t1;
t1 = ['hello', 10];
// t1=[10,'ssss']  // 参数类型不一致 错误
// 枚举：使用枚举类型可以为一组数值赋予友好的名字
var Tester;
(function (Tester) {
    Tester[Tester["Auto"] = 10] = "Auto";
    Tester[Tester["hHihe"] = 9] = "hHihe";
    Tester[Tester["Cicd"] = 101] = "Cicd";
})(Tester || (Tester = {}));
// 枚举数值默认从0开始依次递增
console.log(Tester.Auto, Tester.hHihe, Tester.Cicd);
// 根据特定的名称得到对应的枚举数值
let mutest = Tester.Auto + 100;
let colorName = Tester[10]; // 这里访问的不是枚举值的索引，而是通过值来获取变量名
console.log(mutest, colorName); //110  Auto
//any 
/*

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。
 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。
  这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。
   那么我们可以使用 any 类型来标记这些变量：
*/
let notSure = 4;
notSure = "this is";
notSure = 100;
let listany = [11, "abc", true];
listany[0] = "改变第一位数值为字符串";
console.log("listany", listany);
//object 表示非原始类型，也就是除 number，string，boolean之外的类型。
function fn2(obj) {
    console.log('fn2()', obj);
    return {};
    // return undefined
    // return null
}
const o1 = { key: "12314" };
const o2 = 123; // 其他类型错误
console.log(fn2(o1));
//#联合类型
//需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值
function toString2(x) {
    return x.toString();
}
//   需求2: 定义一个一个函数得到一个数字或字符串值的长度
function getLengtherror(x) {
    // return x.length // error
    //     if (x.length) { // error
    //       return x.length
    //     } else {
    //       return x.toString().length
    //     }
}
//类型断言
/*
通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript 会假设你，程序员，已经进行了必须的检查。

类型断言有两种形式。 其一是“尖括号”语法, 另一个为 as 语法

*/
/*
类型断言(Type Assertion): 可以用来手动指定一个值的类型
语法:
    方式一: <类型>值
    方式二: 值 as 类型  tsx中只能用这种方式
*/
/* 需求: 定义一个函数得到一个字符串或者数值数据的长度 */
function getLength(x) {
    if (x.length) {
        return x.length;
    }
    else {
        return x.toString().length;
    }
}
console.log(getLength('abcd'), getLength(1234));
//类型推断
/*类型推断: TS会在没有明确的指定类型的时候推测出一个类型
有下面2种情况: 1. 定义变量时赋值了, 推断为对应的类型. 2. 定义变量时没有赋值, 推断为any类型*/
/* 定义变量时赋值了, 推断为对应的类型 */
let b9 = 123; // number
// b9 = 'abc' // error
/* 定义变量时没有赋值, 推断为any类型 */
let b10; // any类型
b10 = 123;
b10 = 'abc';
