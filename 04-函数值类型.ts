// 单独指定参数和返回值类型
function add1(num1:number,num2:number):number{
    return num1+num2;
}
console.log(add1(1,2));

const add2=(num1:number,num2:number):number=>{
    return num1+num2;
}
console.log(add2(1,2));
// 同时指定参数有 和返回值 类型
const add3:(num1:number,num2:number)=>number=(num1,num2)=>{
    return num1+num2;
}
console.log(add3(1,2));

function greet(name:string):void{
    console.log("hello",name);
}
greet("kenny");