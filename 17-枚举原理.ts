let songs:string[] = ["song1", "song2", "song3"];
// 注意字符串枚举没有没有自增长行为，因此字符串枚举的每个成员必须有初始值
enum Direction {
    Up="UP",
    Down="DOWN",
    Left="LEFT",
    Right="RIGHT",
    Stop="STOP",
    Name="曾"
}
// direction 类型为枚举Direction,那么，实参的值就是枚举Direction成员的任意一个。
function changeDirection(direction:Direction){
    
    
}
// 直接通过.语法访问枚举的成员
changeDirection(Direction.Up);

/**
 * 枚举
 * 枚举是 TS 为数不多的非JavaScript类型级扩展(不仅仅是类型)的特性之一。
 * 因为:其他类型仅仅被当做类型，而枚举不仅用作类型，还提供值(枚举成员都是有值的)。
 * 也就是说，其他的类型会在编译为」S代码时自动移除。但是，举类型会被编译为JS代码!
 * enum Direction f
 * Up ='UP'
 * Down ='DOWN
 * Left = 'LEFT'
 * Right ='RIGHT
 * var Direction;
 * (function (Direction){Direction["Up"] ="UP",Direction["Down"T = "DOWN" ;Direction["Left"]= "LEFT",Direction["Right"]="RIGHT";})(Directionll(Direction=));
 * 说明:枚举与前面讲到的字面量类型+联合类型组合的功能类似，
 * 都用来表示一组明确的可选值列表。
 * 一般情况下，推荐使用字面量类型+联合类型组合的方式，因为相比枚举，这种方式更加直观、简洁、高效
 */

