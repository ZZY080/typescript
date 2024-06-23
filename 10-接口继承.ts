/**
 * 如果两个接口之间有相同的属性和方法，可以将公共的属性或方法 抽离出来，通过继承来实现复用
 */
// interface Point2D{
//     x:number
//     y:number
// }

// interface Point3D {
//     x:number
//     y:number
//     z:number
// }


interface Point2D{
    x:number
    y:number
}

interface Point3D extends Point2D{
    z:number
}
/**
 * 1. 使用extends 关键字实现了接口Point3D继承Point2D
 * 2. 继承后 Point3D 就拥有了 Point2D 的属性和方法
 */
let p3:Point3D={
    x:1,
    y:2,
    z:3,
}