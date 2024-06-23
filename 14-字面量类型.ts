/**
 * 注TypeScript常用类型
 * 字面量类型
 * 思考以下代码，两个变量的类型分别是什么?
 * let str1 = 'Hello Tsconst str2='Hello TS
 * 通过 TS 类型推论机制，可以得到答案:
 * 1.变量 str1的类型为:string。
 * 2.变量 str2 的类型为:'Hello TS'。
 * 解释:
 * 1. str1 是一个变量(let，它的值可以是任意字符串，所以类型为:string。
 * 2. str2 是一个常量(const)，它的值不能变化只能是"HelloTS’，所以，它的类型为:"HelloTs'。
 * 注意:此处的"Hello TS'，就是一个字面量类型。也就是说某个特定的字符串也可以作为TS 中的类型。
 * 除字符串外，任意的JS字面量(比如，对象、数字等)都可以作为类型使用。
 */

let str1="Hello TS";
const str2:"Hello TS"="Hello TS";
let age:18=18;

// direction 只能是里面的一个 相比于string类型 使用字面量类型更加精确，严谨
function changeDirection(direction:"up"|"down"|"left"|"right"){
    console.log(direction);
}
changeDirection("left");