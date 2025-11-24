// object,array, tuple, enum

const person : {
    firstName:string,
    lastName?:string,
    age?:number,
    address:{
        place:string
    }
} = {
    firstName:"rahul",
    lastName:"sahu",
    age:19,
    address:{
        place:"odisha"
    }
}

// console.log(person.firstName,person.lastName);

// ?ts in array
const person2 : {
    firstName:string,
    lastName?:string,
    age?:number,
    skills:string[]
} = {
    firstName:"rahul",
    lastName:"sahu",
    age:19,
    skills:["html","css","js"]
}

// console.log(person2.skills)


let favlang: string[] 

favlang = ["hindi","english"];

let arr : any[];

arr = ["anything",6,{},[]]; // it loose typescript power

// tuple

const person3 : {
  firstName:string,
  lastName:string,
  age:number,
  skill:string[],
  product:[number,string]
} = {
   firstName:"rahul",
   lastName:"sahu",
   age:19,
   skill:["html"],
   product:[10,"hp victus"]
}

person3.product = [67,"tv"] // correct
// person3.product = ["67","tv"] // incorrect


//enum

enum Role{USER,READ_ONLY_USER,AUTHOR,ADMIN}

const person4 : {
  firstName:string,
  lastName:string,
  age:number,
  skill:string[],
  product:[number,string],
  role:Role
} = {
   firstName:"rahul",
   lastName:"sahu",
   age:19,
   skill:["html"],
   product:[10,"hp victus"],
   role:Role.READ_ONLY_USER
}

if (person4.role === Role.AUTHOR) {
    console.log("Author");
} else if (person4.role === Role.ADMIN) {
    console.log("Admin");
} else if(person4.role === Role.READ_ONLY_USER){
    console.log("read user only");
}
