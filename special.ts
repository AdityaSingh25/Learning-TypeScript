//void

function isConsole(): void {
  console.log("hello");
  return; //we are returning nothing meaning we are returning void
}

//Arrays

var fruits: string[];

fruits = [`🍎`, `🍊`, `🥭`];

var food: Array<string>;
food = ["hi"];

var genericArray: Array<string | number | boolean>;
genericArray = ["hi", 1, true];

//tuple

var coordinates: [number, number, number,number];
coordinates = [12, 13, 1 ,1];

var genTuple:[number,string,boolean];
genTuple=[1,"adi",true]



// objects

let user ={
  firstName: 'Adi',
  lastName:"narayan",
  userName:"AdiNarayan",
  getUserName:():string => this.userName
};

//enums

enum DaysOfTheWeek{
  Monday,
  Tuesday="tuesday",
  Wednesday="wednesday",
}

let dayToday : DaysOfTheWeek;
dayToday = DaysOfTheWeek.Monday;
dayToday = DaysOfTheWeek.Wednesday;


//any ::::::: if we dont know the type

let authorizedUser:any={
  firstName: 'Adi',
  lastName:"narayan",
  userName:"AdiNarayan"
};


let authorizedUser2:{
  firstName:string,
  lastName:string,
  userName:string,
}={
  firstName: 'Adi',
  lastName:"narayan",
  userName:"AdiNarayan"
};

authorizedUser2.userName;