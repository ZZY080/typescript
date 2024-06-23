function mySlice1(start?:number,end?:number):void{
    console.log("起始索引：",start,"结束索引:",end);
}
mySlice1();
mySlice1(1);
mySlice1(1,2)

// 必选参数不能跟在可选参数后面
// function mySlice2(start?:number,end:number):void{
//     console.log("起始索引：",start,"结束索引:",end);
// }