//FUNCTIONS

function add(a:number,b:number):number{
     return a+b;
}

const gret = (name:string):void => {
    console.log(`hii and welcome ${name}`)
}

let value = add(2,3);
gret("rahul");

let combinedFun = Function;

// combinedFun = "x" 
combinedFun = function() {}
combinedFun = add