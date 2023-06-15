var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//in order to inherit the person class to employee class we havento use extend keyword
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    //now by using extends keyword we need to call the constructor method of Person class in the constructor method of derived class ie. Employee ...........and in order to call the constructor of base class we have to use {{{super}}} keyword
    function Employee(id, firstName, middleName, lastName, age
    //we removed the private property for fNmae,lastName and age witch would not then create properties for fname,lname and age in the employee class
    ) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.id = id;
        _this.middleName = middleName;
        return _this;
    }
    //we can override the properties of base class here
    Employee.prototype.getFullName = function () {
        // const nameSegment:Array<string>=super.getFullName().split(" ");
        // nameSegment.splice(1,0,this.middleName);
        // const fullname=nameSegment.join(" ");
        // return `${fullname}`;
        //if we dont want o do this all then we have to use protected in the properties of the base class
        return "".concat(this.firstName, " ").concat(this.middleName, " ").concat(this.lastName);
    };
    return Employee;
}(Person));
var manager = new Employee(1, "Jane", "Patric", "Doe", 30);
console.log("".concat(manager.getFullName()));
