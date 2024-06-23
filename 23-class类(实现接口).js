var Person = /** @class */ (function () {
    function Person() {
        this.name = "jack";
    }
    Person.prototype.sing = function () {
        console.log("123");
    };
    return Person;
}());
var p = new Person();
p.sing();
