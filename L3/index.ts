// union
// LITERAL TYPES
// TYPE ALIAS / CUSTOM TYPES

//UNION

const addTwo = (a: string | number, b: string | number) => {
  let result: number | string;

  if (typeof a === "number" && typeof b === "number") {
    result = a + b;
  } else {
    result = a.toString() + b.toString();
  }

  return result;
};

let ans = addTwo(2, 4);
let ans2 = addTwo("rahul", "sahu");

console.log(ans, ans2);

// LITERAL TYPES

const addTwoOptimize = (
  a: string | number,
  b: string | number,
  conversionType: "as-number" | "as-string"
) => {
  let result: number | string;

  if (
    (typeof a === "number" && typeof b === "number") ||
    conversionType === "as-string"
  ) {
    result = +a + +b;
  } else {
    result = a.toString() + b.toString();
  }

  return result;
};

let val1 = addTwoOptimize(30, 45, "as-number");
let val2 = addTwoOptimize("rahul", "sahu", "as-number");

console.log(val1, val2);

// TYPE ALIAS / CUSTOM TYPES

type combine = string | number;
type whichType = "as-number" | "as-string"
const addTwoNum = (
  a: combine,
  b: combine,
  conversionType: whichType
) => {
     let result: number | string;

  if (
    (typeof a === "number" && typeof b === "number") ||
    conversionType === "as-string"
  ) {
    result = +a + +b;
  } else {
    result = a.toString() + b.toString();
  }

  return result;
};


let val3 = addTwoNum(2,5,"as-number");
console.log(val3);

type User = {
    name:string,
    age:number,
    skills: string[]
}

const user:User = {
    name:"rahul",
    age:19,
    skills:["nodejs","express js"]
}


console.log(user.skills);

function greet (user:User){
    console.log(`hello mr/ms ${user.name}`)
}

greet(user);