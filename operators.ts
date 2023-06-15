//Array

var fruits2: Array<string> = ["Adi", "aaa", "soo"];
var fruits3: string[] = ["Adiii", "aaaiii", "sooiii"];
var fruits4: Array<string> = ["Adixxx", "aaaxxx", "sooxxx"];

var edibles: Array<string> = [...fruits2, ...fruits3, ...fruits4];
console.log(edibles);

//object

var user44 = {
  firstName: "Adi",
  lastName: "Singh",
  userName: "AdiNarayan",
};

var userDetails = {
  ...user44,
  address: "123 sector A",
  email: "adiv@gmail.com",
  phoneNo: "234",
};
console.log(userDetails);

//functions

function add(x: number, y: number, z: number): number {
  return x + y + z;
}

let numbers: Array<number> = [1, 2, 3];

console.log(add(...numbers));

//Destructuring

let { firstName, lastName: lName } = user44;
console.log(firstName);
console.log(lName);

let [apple] = fruits2;
console.log(apple);

//rest operator
//allow us to represent an indefinite no of arguments as an array

let [justApple, ...restEdibles] = fruits3;
console.log(justApple);
console.log(restEdibles);

//with objects

var { firstNamee, ...restUser } = user44;
console.log(firstNamee);
console.log(restUser);
