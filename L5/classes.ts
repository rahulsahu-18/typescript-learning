// basic class

// class Department {
//     name:string;

//     constructor(n:string)
//     {
//         this.name = n
//     }
// describe()
// {
//     console.log("Depertment name",this.name)
// }
// }

// const Accounting = new Department("Accounting");
// Accounting.describe();

// const obj = {
//     name:"tiger",
//     acd:Accounting.describe,
// }

// obj.acd()

// private and public access modifiers

class Depertment {
  public name: string;
  private employe: string[];

  constructor(n: string) {
    this.name = n;
    this.employe = [];
  }
  describe() {
    console.log("Depertment name", this.name);
  }
  addEmployee(n: string) {
    this.employe.push(n);
  }
  printEmployeeInformation() {
    console.log("Number of emp: ", this.employe.length);
    console.log(this.employe);
  }
}

const job = new Depertment("it");
job.describe();
job.addEmployee("sunny")
job.addEmployee("amit")
job.addEmployee("munna")

job.printEmployeeInformation()

