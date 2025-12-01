console.log("hii");

class person {
    constructor(name,age)
    {
        this.name = name;
        this.age = age
    }

    greet() {
        console.log(`hello ${this.name}`);
    }
}

class employee extends person {
   
   constructor(name,age,jobRole,salery)
   {
    super(name,age)
    this.jobRole = jobRole
    this.salery = salery
   }
   set age(age)
   {
    this.age = age
   }
   get info()
   {
    return `employe name ${this.name} employee age ${this.age} employee salery ${this.salery} employee role ${this.jobRole} `
   }
}
const p1 = new person("rahul",19);
p1.greet();

const e1 = new employee("rahul",19,"sde",50000);
e1.age = 23
console.log(e1.info);


