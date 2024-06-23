/**
 * 1. interface是对对象的结构的描述，type是对类型的描述
 * 2. interface中的属性和方法都需要有定义，并且属性和方法的类型也需要
 * 3. interface可以被多个类型实现，type可以被单独使用
 * 4. interface可以继承，type可以继承
 * 5. interface可以用来约束函数的入参和返回值，type可以用来约束
 * 6. interface可以用来约束类，type可以用来约束类
 * interface(接口) 和 type（类型别名）的对比
 * 相同的点：都可以给对象指定类型
 * 不同的点：
 *  接口只为对象指定类型
 *  类型别名，不仅可以为对象指定类型，实际可以为任何类型指定别名

 */
interface IPerson {
    name:string
    age:number
    sayHi():void
}
let person1:IPerson={
    name:"tom",
    age:22,
    sayHi:()=>{

    }
}
type NumStr=string|number;
let s:NumStr=1;