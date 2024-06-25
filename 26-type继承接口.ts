 interface ILength {
    length:number,
 }

 function id<Type extends ILength>(value:Type):Type{
    return value;
 }

 interface Props {
    id:string,
    title:string,
    children:number
 }

 type PartialProps=Partial<Props>
 type Read=Readonly<Props>
 type PickProps = Pick<Props,"id" | "title">

 type RecordObj = Record<"a"|"b"|"c",string[]>
 let obj:RecordObj ={
    a:["1"],
    b:["1"],
    c:["1"],
 }