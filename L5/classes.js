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
var Depertment = /** @class */ (function () {
    function Depertment(n) {
        this.name = n;
        this.employe = [];
    }
    Depertment.prototype.describe = function () {
        console.log("Depertment name", this.name);
    };
    Depertment.prototype.addEmployee = function (n) {
        this.employe.push(n);
    };
    Depertment.prototype.printEmployeeInformation = function () {
        console.log("Number of emp: ", this.employe.length);
        console.log(this.employe);
    };
    return Depertment;
}());
var job = new Depertment("it");
job.describe();
job.addEmployee("sunny");
job.addEmployee("amit");
job.addEmployee("munna");
job.printEmployeeInformation();
