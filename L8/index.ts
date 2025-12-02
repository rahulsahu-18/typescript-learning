// Generic

type person = {
  name: string;
  age: number;
};

const boy: person = {
  name: "rahul",
  age: 19,
};

const arr: Array<person> = [{ name: "amit", age: 20 }];

function merge<T,U,V> (obj1:T,obj2:U,obj3:V) {
    return {...obj1,...obj2,...obj3};
}

merge({name:"rahul"},{role:"sde"},{id:"d1"});

function createObject<T extends string, U extends number, V extends boolean>(
    key: T,
    value: U,
    isActive: V
): { key: T, value: U, isActive: V } {
    return { key, value, isActive }
}

const obj = createObject("age", 25, true);


interface Box<T>{
    value: T;
}

const numberBox:Box<number> = {value:100};
const strBox:Box<string> = {value:"mark"};

interface user<T = string> {
    data:T;
    status:number
}

const response:user = {data:"sucess",status:201};

type person2 = {
  name:string,
  age:number
}

const response2:user<person2> = {data:{name:"rahul",age:19},status:200};
console.log(response)
console.log(response2)

//Generic with class

class container<T> {
    private content: T;
    constructor(content:T)
    {
        this.content = content;
    }

   get getContent() : T {
       return this.content;
    }
}

const stringContainer = new container<string>("rahul");
console.log(stringContainer.getContent);

const personContainer = new container<person2>({name:"rahul kumar",age:34});
console.log(personContainer.getContent);


// Generics with array

function getArray<T> (arr:T[]):T {
    return arr[0];
}

const nrr = [1,2,3,4,5];
const srr = ['3','f','g','h'];
console.log(getArray<number>(nrr));
console.log(getArray(srr));


const Person = {key:"Mernstack"}
console.log(Person["key"]);

function getProperty(obj : {name:string}, key : string){
    return (obj as any )[key];
}
const res1 = getProperty({name:"rahul"}, "name");
console.log(res1);

// function getPoperty2<T extends object,U extends typeof T>(obj:T,idx:U) : T[U]{
//   return obj[idx];
// }

function getProperty2<T extends object, K extends keyof T>(obj : T , key : K) : T[K] {
    return obj[key];
}

const person = {name:"rahul",age:89};
console.log(getProperty2(person,"age"));


