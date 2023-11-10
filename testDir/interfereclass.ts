/*
TypeScript 的核心原则之一是对值所具有的结构进行类型检查。我们使用接口（Interfaces）来定义对象的类型。接口是对象的状态(属性)和行为(方法)的抽象(描述)

*/



interface IPerson {
    readonly id: number   //一旦赋值后再也不能被改变了。
    name: string
    age: number
    sex?: string
  }
  

  /*
  
  readonly vs const
最简单判断该用 readonly 还是 const 的方法是看要把它做为变量使用还是做为一个属性。 
做为变量使用的话用 const，若做为属性则使用 readonly。
  */

//为了使用接口表示函数类型，我们需要给接口定义一个调用签名。它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
interface SearchFunc{

    (source: string, subString: string): boolean
}

/*
这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。 
下例展示了如何创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量

*/

const mySearch: SearchFunc = function (source: string, sub: string): boolean {
    return source.search(sub) > -1
  }
  
  console.log(mySearch('abcd', 'bc'))