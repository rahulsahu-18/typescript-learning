// object,array, tuple, enum
var person = {
    firstName: "rahul",
    lastName: "sahu",
    age: 19,
    address: {
        place: "odisha"
    }
};
// console.log(person.firstName,person.lastName);
// ?ts in array
var person2 = {
    firstName: "rahul",
    lastName: "sahu",
    age: 19,
    skills: ["html", "css", "js"]
};
// console.log(person2.skills)
var favlang;
favlang = ["hindi", "english"];
var arr;
arr = ["anything", 6, {}, []]; // it loose typescript power
// tuple
var person3 = {
    firstName: "rahul",
    lastName: "sahu",
    age: 19,
    skill: ["html"],
    product: [10, "hp victus"]
};
person3.product = [67, "tv"]; // correct
// person3.product = ["67","tv"] // incorrect
//enum
var Role;
(function (Role) {
    Role[Role["USER"] = 0] = "USER";
    Role[Role["READ_ONLY_USER"] = 1] = "READ_ONLY_USER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
    Role[Role["ADMIN"] = 3] = "ADMIN";
})(Role || (Role = {}));
var person4 = {
    firstName: "rahul",
    lastName: "sahu",
    age: 19,
    skill: ["html"],
    product: [10, "hp victus"],
    role: Role.READ_ONLY_USER
};
if (person4.role === Role.AUTHOR) {
    console.log("Author");
}
else if (person4.role === Role.ADMIN) {
    console.log("Admin");
}
else if (person4.role === Role.READ_ONLY_USER) {
    console.log("read user only");
}
