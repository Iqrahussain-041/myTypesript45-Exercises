// Q11
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var friendsName = ["Sana", "Ayesha", "Anshara", "Alisha"];
console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);
console.log(friendsName[3]);
// Q12
var ClassmatesName = ["Sana", "Ayesha", "Anshara", "Alisha"];
var massage = " how are you guys";
console.log("hello", friendsName[0], massage);
console.log("hello", friendsName[1], massage);
console.log("hello", friendsName[2], massage);
console.log("hello", friendsName[3], massage);
// Q13
var transportationMode = ["Civic", "Toyota corolla", "Vitz"];
transportationMode.forEach(function (Mode) {
    return console.log("i woulde like to purchase a ".concat(Mode));
});
console.log("but ".concat(transportationMode[1], " is my dream Car"));
// Q14
var GuestList = ["Iqra", "Shani", "fari"];
GuestList.forEach(function (invitation) {
    return console.log("\"hey ".concat(invitation, ",i'd love to catch up lunch! would you like to join me for delicious meal this \"saturday\" at 1:30\" at \"shanwari\" let\n    know if you're free "));
});
// Q15
var newGuestList = ["Zahora", "Aeni", "bisma"];
console.log("".concat(newGuestList[1], " is not coming"));
newGuestList.splice(1, 1, "ayesha");
newGuestList.forEach(function (newinvitation) {
    return console.log("\"hey ".concat(newinvitation, ",i'd love to catch up lunch! would you like to join me for delicious meal this \"saturday\" at 1:30\" at \"shanwari\" let\n    know if you're free "));
});
// Q16
var moreGuestList = ["Zahara", "Aeni", "bisma"];
console.log("".concat(moreGuestList[1], " is not coming"));
moreGuestList.splice(1, 1, "ayesha");
console.log("Hey everyone! we found a bigger lunch table. lets call some more gueset");
moreGuestList.unshift("arub");
moreGuestList.push("sehar");
var middleGueset = Math.floor(moreGuestList.length / 2);
moreGuestList.splice(middleGueset, 0, "amber");
moreGuestList.forEach(function (moerinvitation) {
    return console.log("\"hey ".concat(moerinvitation, ",i'd love to catch up lunch! would you like to join me for delicious meal this \"saturday\" at 1:30\" at \"shanwari\" let\n        know if you're free "));
});
// Q17
var shrinkguestlist = ["iqra", "sana", "noor"];
console.log("".concat(shrinkguestlist[1], " is not coming"));
shrinkguestlist.splice(1, 1, "anshara");
console.log("Hey everyone! we found a bigger lunch table. lets call some more gueset");
shrinkguestlist.unshift("arub");
shrinkguestlist.push("sehar");
var middGueset = Math.floor(moreGuestList.length / 2);
shrinkguestlist.splice(middGueset, 0, "amarah");
shrinkguestlist.forEach(function (shrinkinvitation) {
    return console.log("hey ".concat(shrinkinvitation, ",i'd love to catch up lunch! would you like to join me for delicious meal this \"saturday\" at 1:30\" at \"shanwari\" let\n        know if you're free "));
});
console.log("unfortunately , new lunch table  not bigger i have just space for 2 person");
while (shrinkguestlist.length > 2) {
    var removeguest = shrinkguestlist.pop();
    console.log("sorry, ".concat(removeguest, " may not invite you for lunch"));
}
console.log("invitation to the 2 person");
shrinkguestlist.forEach(function (guestinvitation) {
    return console.log("hey ".concat(guestinvitation, " you are still invited for lunch"));
});
shrinkguestlist.pop();
shrinkguestlist.pop();
console.log(shrinkguestlist, "empty list");
// Q18
var placesToVisit = ["Kyoto", "Machu Picchu", "Santorini", "New Zealand", "Iceland"];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
console.log("Still in original order:", placesToVisit);
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
console.log("Still in original order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisit);
// Q19
var placesToVisited = ["Kyoto", "Machu Picchu", "Santorini", "New Zealand", "Iceland"];
console.log("Original order:", placesToVisited);
console.log("Alphabetical order:", __spreadArray([], placesToVisited, true).sort());
console.log("Still in original order:", placesToVisited);
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisited, true).sort().reverse());
console.log("Still in original order:", placesToVisited);
placesToVisited.reverse();
console.log("Reversed order:", placesToVisited);
placesToVisited.reverse();
console.log("Back to original order:", placesToVisited);
placesToVisited.sort();
console.log("Sorted in alphabetical order:", placesToVisited);
placesToVisited.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisited);
var lunchGuests = ["Alina", "noor", "sana"];
console.log("I am inviting ".concat(lunchGuests.length, " people to lunch."));
// Q20
var favoriteBooks = ["To Kill a Mockingbird", "1984", "The Great Gatsby", "Pride and Prejudice", "The Hobbit"];
console.log("Original order:", favoriteBooks);
console.log("Alphabetical order:", __spreadArray([], favoriteBooks, true).sort());
console.log("Still in original order:", favoriteBooks);
console.log("Reverse alphabetical order:", __spreadArray([], favoriteBooks, true).sort().reverse());
console.log("Still in original order:", favoriteBooks);
favoriteBooks.reverse();
console.log("Reversed order:", favoriteBooks);
favoriteBooks.reverse();
console.log("Back to original order:", favoriteBooks);
favoriteBooks.sort();
console.log("Sorted in alphabetical order:", favoriteBooks);
favoriteBooks.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", favoriteBooks);
console.log("I have ".concat(favoriteBooks.length, " favorite books."));
