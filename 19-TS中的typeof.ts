console.log(typeof "Hello");
let p={x:1,y:2};
// function formatPoint(point:typeof p){

// }
function formatPoint(point:{x:number;y:number}){

}

formatPoint({x:1,y:200});

let num:typeof p.x;
function add(num1:number,num2:number){
    return num1+num2;
}
// let ret:typeof add(1,2);