// Q31
var UserName = ["ali", "ahsan", "admin", "amar"];
UserName = [];
if (UserName.length === 0) {
    console.log("your array is empty we need to find some user!");
}
else {
    UserName.forEach(function (oneUser) {
        if (oneUser === "admin") {
            console.log("hello ".concat(oneUser, " would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, " thank you for logging in again."));
        }
    });
}
// Q32
var Current_User = ["areeb", "aeni", "ayesha", "alina", "sana"];
var New_User = ["areeb", "iqra", "sana", "alisha", "aeni"];
New_User.forEach(function (newone_user) {
    var condition = Current_User.some(function (newcheck_one) { return newcheck_one.toLowerCase() === newone_user.toLowerCase(); });
    if (condition) {
        console.log("sorry ".concat(newone_user, " is already taken"));
    }
    else {
        console.log("this username ".concat(newone_user, " avalible"));
    }
});
// Q33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var onenum = numbers_1[_i];
    var ordinalNum = void 0;
    if (onenum === 1) {
        ordinalNum = "st";
    }
    else if (onenum === 2) {
        ordinalNum = "nd";
    }
    else if (onenum === 3) {
        ordinalNum = "rd";
    }
    else {
        ordinalNum = "th";
    }
    console.log("".concat(onenum, " ").concat(ordinalNum));
}
// Q34
var Pizza = ["chicken tikka", "superious", "fajita"];
for (var _a = 0, Pizza_1 = Pizza; _a < Pizza_1.length; _a++) {
    var onepizza = Pizza_1[_a];
    console.log("I  like ".concat(onepizza, "pizza"));
}
console.log("i love pizza");
console.log("i eat pizza");
// Q35
var petAnimal = ["cat", "dog", "rabbit"];
for (var _b = 0, petAnimal_1 = petAnimal; _b < petAnimal_1.length; _b++) {
    var oneanimal = petAnimal_1[_b];
    console.log("A ".concat(oneanimal, " would make a great pet"));
}
console.log("any of these animal would make a great pet");
// Q36
function make_shirt(size, printmassage) {
    console.log("you selected ".concat(size, " size shirt with ").concat(printmassage, " prints on shirt"));
}
make_shirt("small", "joyfull day");
// Q37
function makes_shirt(sizes, printsmasge) {
    if (sizes === void 0) { sizes = "large"; }
    if (printsmasge === void 0) { printsmasge = "i love typescript"; }
    console.log(" Create a ".concat(sizes, " shirt with the  ").concat(printsmasge, " print on shirt"));
}
makes_shirt();
makes_shirt("medium");
makes_shirt("small", "i love css");
// Q38
function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("karachi");
describe_city("lahore");
describe_city("cap_town", "south africa");
// Q39
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("karachi", "pakistan"));
console.log(city_country("birmingham", "london"));
// Q40
function make_album(artist_name, albumtitle, count) {
    var album = {
        artist: artist_name,
        title: albumtitle,
    };
    if (count !== undefined) {
        album.tracks = count;
    }
    return album;
}
var album1 = (make_album("iqra", "album title 1"));
var album2 = (make_album("ali", "album title 1"));
var album3 = (make_album("shan", "album title 1", 10));
console.log(album1);
console.log(album2);
console.log(album3);
