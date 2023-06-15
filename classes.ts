class Person {
  //   firstName: string;
  //   lastName: string;
  //   age: number;

  constructor(
    protected firstName: string,
    protected lastName: string,
    protected age: number
  ) {
    // this.firstName = firstName;
    // this.lastName = lastName;
    // this.age = age;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName} ${this.age}`;
  }
}

const person: Person = new Person("Adi", "Narayan", 23);

console.log(person.getFullName()); //by default it is public

//
//in order to inherit the person class to employee class we havento use extend keyword
class Employee extends Person {
  //now by using extends keyword we need to call the constructor method of Person class in the constructor method of derived class ie. Employee ...........and in order to call the constructor of base class we have to use {{{super}}} keyword
  constructor(
    private id: number,
    firstName: string,
    private middleName: string,
    lastName: string,
    age: number
    //we removed the private property for fNmae,lastName and age witch would not then create properties for fname,lname and age in the employee class
  ) {
    super(firstName, lastName, age);
  }

  //we can override the properties of base class here
  getFullName(): string {
    // const nameSegment:Array<string>=super.getFullName().split(" ");
    // nameSegment.splice(1,0,this.middleName);
    // const fullname=nameSegment.join(" ");
    // return `${fullname}`;

    //if we dont want o do this all then we have to use protected in the properties of the base class
    return `${this.firstName} ${this.middleName} ${this.lastName}`
  }
}

const manager: Person = new Employee(1, `Jane`, `Patric`, `Doe`, 30);
console.log(`${manager.getFullName()}`);
