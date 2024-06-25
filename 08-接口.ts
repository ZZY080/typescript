/**
 * 当一个对象类型被多次使用时，一般会使用接口(interface)来描述对象的类型，达到复用的目的。
 * 解释：
 * 1. 接口是对象的结构的描述，使用interface来定义
 * 2. 接口中的属性和方法都需要有定义，并且属性和方法的类型也需要与定义的类型保持一致
 * 3. 接口可以被多个类型实现，使用implements来实现
 * 4. 接口可以继承，使用extends来继承，继承来的属性和方法可以不必  
 * 5. 接口可以用来约束函数的入参和返回值，使用interface来定义
 * 6. 接口可以用来约束类，使用interface来定义
 * 7. 接口可以用来约束函数的参数和返回值，使用interface来定义
 * 8. 接口可以用来约束类中的属性和方法，使用interface来定义
 * 9. 使用interface 关键字来声明接口
 * 10. 接口名称可以时任意合法的变量名称
 * 11. 声明接口后直接使用接口名称作为变量类型
 * 12. 因为每一行只有一个属性类型因此属性类型后面没有分号
 */

interface IPerson {
    name?:string
    age?:number
    sayHi():void,
    
}


let person1:IPerson={
    name:"kenny",
    age:22,
    sayHi(){},
}

let person2:IPerson={
    name:"kenny",
    age:22,
    sayHi(){},
}

let person3:IPerson={
    name:"kenny",
    age:22,
    sayHi(){},
}