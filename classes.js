var Person = /** @class */ (function () {
    //   firstName: string;
    //   lastName: string;
    //   age: number;
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.age = age;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName, " ").concat(this.age);
    };
    return Person;
}());
var person = new Person("Adi", "Narayan", 23);
console.log(person.getFullName()); //by default it is public
//
