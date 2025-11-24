// union
// LITERAL TYPES
// TYPE ALIAS / CUSTOM TYPES
//UNION
var addTwo = function (a, b) {
    var result;
    if (typeof a === "number" && typeof b === "number") {
        result = a + b;
    }
    else {
        result = a.toString() + b.toString();
    }
    return result;
};
var ans = addTwo(2, 4);
var ans2 = addTwo("rahul", "sahu");
console.log(ans, ans2);
// LITERAL TYPES
var addTwoOptimize = function (a, b, conversionType) {
    var result;
    if ((typeof a === "number" && typeof b === "number") ||
        conversionType === "as-string") {
        result = +a + +b;
    }
    else {
        result = a.toString() + b.toString();
    }
    return result;
};
var val1 = addTwoOptimize(30, 45, "as-number");
var val2 = addTwoOptimize("rahul", "sahu", "as-number");
console.log(val1, val2);
var addTwoNum = function (a, b, conversionType) {
    var result;
    if ((typeof a === "number" && typeof b === "number") ||
        conversionType === "as-string") {
        result = +a + +b;
    }
    else {
        result = a.toString() + b.toString();
    }
    return result;
};
var val3 = addTwoNum(2, 5, "as-number");
console.log(val3);
var user = {
    name: "rahul",
    age: 19,
    skills: ["nodejs", "express js"]
};
console.log(user.skills);
function greet(user) {
    console.log("hello mr/ms ".concat(user.name));
}
greet(user);
