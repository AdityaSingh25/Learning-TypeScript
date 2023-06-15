class Person {
//   firstName: string;
//   lastName: string;
//   age: number;

  constructor(
    private firstName: string,
    private lastName: string,
    private age: number
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

