// type guards
// 1
type combineable = string | number;
type numeric = number | boolean

type universal = combineable & numeric

function add(a: combineable, b: combineable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a+b;
}

console.log(add(10, 20));
console.log(add(10, "20"));

// 2

type admin = {
    name:string;
    task: string []
}

type employe = {
    name:string
    startDate : Date;
    salery:number;
}

type ElevetedEmployee = admin & employe
type UnknowTypeEmployee = admin | employe
const employee:ElevetedEmployee = {
    name:"rahul",
    startDate:new Date(),
    task:["create server"],
    salery:50000
}

function printEmployeeDetails(obj:UnknowTypeEmployee)
{
  if('name' in employee)
  {
    console.log(obj.name);
  }
}

printEmployeeDetails(employee)


// 3

class car {
    drive()
    {
        console.log("drive a car...");
    }
}

class truck {
    drive() {
        console.log("drive a tuck...")
    }
    load(num:number)
    {
        console.log("load is ",num);
    }
}

type Vehicle = truck | car ;

function getVehicleInfo(obj:Vehicle)
{
   if(obj instanceof truck)
   {
    obj.load(18);
   }

   if(obj instanceof car)
   {
    obj.drive();
   }
}

const v1 = new truck();
const v2 = new car();

getVehicleInfo(v1);
getVehicleInfo(v2);