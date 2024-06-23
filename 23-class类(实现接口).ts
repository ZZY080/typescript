interface Singale {
    sing():void
    name:string
}
class Person implements Singale {
    name="jack";
    sing(): void {
        console.log("123")
    }
}
const p = new Person();
p.sing();