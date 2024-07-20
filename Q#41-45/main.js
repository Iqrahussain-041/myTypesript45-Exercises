// Q41
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of magician names
var magicians = ["Houdini", "Copperfield", "Blaine", "Angel", "Penn", "Teller"];
// Function to print magician names
function show_magicians(magicianList) {
    magicianList.forEach(function (magician) {
        console.log(magician);
    });
}
// Call the function with the array of magician names
show_magicians(magicians);
// Q42
var Magicians = ["Houdini", "Copperfield", "Blaine", "Angel", "Penn", "Teller"];
function make_great(magicianList) {
    for (var i = 0; i < magicianList.length; i++) {
        magicianList[i] = "the Great " + magicianList[i];
    }
}
function show_Magicians(magicianList) {
    magicianList.forEach(function (magician) {
        console.log(magician);
    });
}
make_great(Magicians);
show_magicians(Magicians);
// Q43
var magIcians = ["Houdini", "Copperfield", "Blaine", "Angel", "Penn", "Teller"];
function make_Great(magicianList) {
    var greatMagicians = magicianList.map(function (magician) { return "the Great " + magician; });
    return greatMagicians;
}
function showmagicians(magicianList) {
    magicianList.forEach(function (magician) {
        console.log(magician);
    });
}
var GreatMagicians = make_Great(__spreadArray([], magicians, true));
console.log("Original Magicians:");
showmagicians(magicians);
console.log("\nGreat Magicians:");
showmagicians(GreatMagicians);
// Q44
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("  - No items requested.");
    }
    else {
        items.forEach(function (item) {
            console.log("  - ".concat(item));
        });
    }
    console.log("\n");
}
order_sandwich("Lettuce", "Tomato", "Bacon");
order_sandwich("Turkey", "Cheese");
order_sandwich("Ham", "Pickles", "Mustard", "Onions", "Pepperoni");
function createCar(manufacturer, model, properties) {
    var car = __assign({ manufacturer: manufacturer, model: model }, properties);
    return car;
}
var car1 = createCar("Toyota", "Camry", { color: "blue", feature: "sunroof" });
var car2 = createCar("Tesla", "Model S", { color: "red", autopilot: "true" });
var car3 = createCar("Ford", "Mustang", { color: "black", package: "GT", year: "2022" });
console.log(car1);
console.log(car2);
console.log(car3);
