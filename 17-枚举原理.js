var songs = ["song1", "song2", "song3"];
// 注意字符串枚举没有没有自增长行为，因此字符串枚举的每个成员必须有初始值
var Direction;
console.log(Direction);
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
    Direction["Stop"] = "STOP";
    Direction["Name"] = "\u66FE";
})(Direction || (Direction = {}));
// direction 类型为枚举Direction,那么，实参的值就是枚举Direction成员的任意一个。
function changeDirection(direction) {
}
// 直接通过.语法访问枚举的成员
changeDirection(Direction.Up);
