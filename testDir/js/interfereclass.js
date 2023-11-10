/*
TypeScript 的核心原则之一是对值所具有的结构进行类型检查。我们使用接口（Interfaces）来定义对象的类型。接口是对象的状态(属性)和行为(方法)的抽象(描述)

*/
/*
这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。
下例展示了如何创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量

*/
const mySearch = function (source, sub) {
    return source.search(sub) > -1;
};
console.log(mySearch('abcd', 'bc'));
