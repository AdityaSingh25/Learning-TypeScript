//Array
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fruits2 = ["Adi", "aaa", "soo"];
var fruits3 = ["Adiii", "aaaiii", "sooiii"];
var fruits4 = ["Adixxx", "aaaxxx", "sooxxx"];
var edibles = __spreadArray(__spreadArray(__spreadArray([], fruits2, true), fruits3, true), fruits4, true);
console.log(edibles);
//object
var user44 = {
    firstName: "Adi",
    lastName: "Singh",
    userName: "AdiNarayan",
};
var userDetails = __assign(__assign({}, user44), { address: "123 sector A", email: "adiv@gmail.com", phoneNo: "234" });
console.log(userDetails);
//functions
function add(x, y, z) {
    return x + y + z;
}
var numbers = [1, 2, 3];
console.log(add.apply(void 0, numbers));
//Destructuring
var firstName = user44.firstName, lName = user44.lastName;
console.log(firstName);
console.log(lName);
var apple = fruits2[0];
console.log(apple);
//rest operator
//allow us to represent an indefinite no of arguments as an array
var justApple = fruits3[0], restEdibles = fruits3.slice(1);
console.log(justApple);
console.log(restEdibles);
//with objects
var firstNamee = user44.firstNamee, restUser = __rest(user44, ["firstNamee"]);
console.log(firstNamee);
console.log(restUser);
