// Generic
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var boy = {
    name: "rahul",
    age: 19,
};
var arr = [{ name: "amit", age: 20 }];
function merge(obj1, obj2, obj3) {
    return __assign(__assign(__assign({}, obj1), obj2), obj3);
}
merge({ name: "rahul" }, { role: "sde" }, { id: "d1" });
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
var obj = createObject("age", 25, true);
var numberBox = { value: 100 };
var strBox = { value: "mark" };
var response = { data: "sucess", status: 201 };
var response2 = { data: { name: "rahul", age: 19 }, status: 200 };
console.log(response);
console.log(response2);
//Generic with class
var container = /** @class */ (function () {
    function container(content) {
        this.content = content;
    }
    Object.defineProperty(container.prototype, "getContent", {
        get: function () {
            return this.content;
        },
        enumerable: false,
        configurable: true
    });
    return container;
}());
var stringContainer = new container("rahul");
console.log(stringContainer.getContent);
var personContainer = new container({ name: "rahul kumar", age: 34 });
console.log(personContainer.getContent);
// Generics with array
function getArray(arr) {
    return arr[0];
}
var nrr = [1, 2, 3, 4, 5];
var srr = ['3', 'f', 'g', 'h'];
console.log(getArray(nrr));
console.log(getArray(srr));
var Person = { key: "Mernstack" };
console.log(Person["key"]);
function getProperty(obj, key) {
    return obj[key];
}
var res1 = getProperty({ name: "rahul" }, "name");
console.log(res1);
// function getPoperty2<T extends object,U extends typeof T>(obj:T,idx:U) : T[U]{
//   return obj[idx];
// }
function getProperty2(obj, key) {
    return obj[key];
}
var person = { name: "rahul", age: 89 };
console.log(getProperty2(person, "age"));
