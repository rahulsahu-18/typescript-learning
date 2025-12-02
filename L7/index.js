function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(10, 20));
console.log(add(10, "20"));
var employee = {
    name: "rahul",
    startDate: new Date(),
    task: ["create server"],
    salery: 50000
};
function printEmployeeDetails(obj) {
    if ('name' in employee) {
        console.log(obj.name);
    }
}
printEmployeeDetails(employee);
// 3
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.drive = function () {
        console.log("drive a car...");
    };
    return car;
}());
var truck = /** @class */ (function () {
    function truck() {
    }
    truck.prototype.drive = function () {
        console.log("drive a tuck...");
    };
    truck.prototype.load = function (num) {
        console.log("load is ", num);
    };
    return truck;
}());
function getVehicleInfo(obj) {
    if (obj instanceof truck) {
        obj.load(18);
    }
    if (obj instanceof car) {
        obj.drive();
    }
}
var v1 = new truck();
var v2 = new car();
getVehicleInfo(v1);
getVehicleInfo(v2);
