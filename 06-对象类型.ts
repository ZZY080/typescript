/**
 * 1. 直接使用{}来描述对象结构，属性采用属性名:类型的形式；方法采用方法名():返回值类型的形式
 * 2. 如果方法有参数，就在方法后面的小括号中指定参数类型
 * 3. 在一行代码中指定对象的多个属性类型时，使用;(分号)来分隔
 *    如果一行代码只有一个属性类型（通过换行来分隔多个属性），可以去掉；（分号）
 *    方法类类型也可以使用箭头函数形式
 */

let person1:{name:string;age:number;sayHi():void;great(name:string):void}={
    name:"kenny",
    age:22,
    sayHi(){},
    great(name){

    }
}

let person2:{
    name:string
    age:number
    sayHi():void
    great(name:string):void
}={
    name:"kenny",
    age:22,
    sayHi(){},
    great(name){

    }
}

let person3:{
    name:string
    age:number
    sayHi:()=>void
    great(name:string):void
}={
    name:"kenny",
    age:22,
    sayHi(){},
    great(name){

    }
}