interface Sing {
    sing():void
    name:string
}
class Person implements Sing {
    name="jack";
    sing(){
        console.log("123")
        return 1;
    }
}
const p = new Person();
p.sing();