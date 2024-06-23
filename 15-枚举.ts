/**
 * 
 * 枚举
 * 枚举的功能类似于字面量类型+联合类型组合的功能，也可以表示一组明确的可选值。
 * 枚举:定义一组命名常量。它描述一个值，该值可以是这些命名常量中的一个
 * Direction { Up, Down, Left, Right }enum
 * function changeDirection(direction: Direction)console.log(direction)
 * 解释:
 * 1.使用 enum 关键字定义枚举。
 * 2.约定枚举名称、枚举中的值以大写字母开头。
 * 3.枚举中的多个值之间通过，(逗号)分隔。
 * 4.定义好枚举后，直接使用枚举名称作为类型注解。
 */

// 枚举
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right,
//     Stop,
// }
// 设置枚举初始值
// enum Direction {
//     Up=10,
//     Down,
//     Left,
//     Right,
//     Stop,
// }

// 枚举成员为数字类型的成为数字枚举
enum Direction {
    Up=10,
    Down=4,
    Left=8,
    Right=0,
    Stop=12,
}
// direction 类型为枚举Direction,那么，实参的值就是枚举Direction成员的任意一个。
function changeDirection(direction:Direction){
    
    
}
// 直接通过.语法访问枚举的成员
changeDirection(Direction.Up);