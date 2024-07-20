// Q11

let friendsName =["Sana","Ayesha","Anshara","Alisha"]
console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);
console.log(friendsName[3]);

// Q12

let ClassmatesName =["Sana","Ayesha","Anshara","Alisha"]
let massage =" how are you guys"
console.log("hello",friendsName[0],massage);
console.log("hello",friendsName[1],massage);
console.log("hello",friendsName[2],massage);
console.log("hello",friendsName[3],massage);

// Q13

let transportationMode = ["Civic","Toyota corolla","Vitz"];
transportationMode.forEach((Mode) =>
    console.log(`i woulde like to purchase a ${Mode}`)
);
console.log(`but ${transportationMode[1]} is my dream Car`);

// Q14

let GuestList = [ "Iqra","Shani","fari"];
GuestList.forEach((invitation)=>
console.log(`"hey ${invitation},i'd love to catch up lunch! would you like to join me for delicious meal this "saturday" at 1:30" at "shanwari" let
    know if you're free `)
);

// Q15

let newGuestList = [ "Zahora","Aeni","bisma"];
console.log(`${newGuestList[1]} is not coming`);
newGuestList.splice(1,1,"ayesha");
newGuestList.forEach((newinvitation)=>
console.log(`"hey ${newinvitation},i'd love to catch up lunch! would you like to join me for delicious meal this "saturday" at 1:30" at "shanwari" let
    know if you're free `)
);

// Q16
let moreGuestList = [ "Zahara","Aeni","bisma"];
console.log(`${moreGuestList[1]} is not coming`);
moreGuestList.splice(1,1,"ayesha");
console.log(`Hey everyone! we found a bigger lunch table. lets call some more gueset`);
moreGuestList.unshift("arub");
moreGuestList.push("sehar");

let middleGueset: number=Math.floor(moreGuestList.length/2);
moreGuestList.splice(middleGueset,0,"amber");
moreGuestList.forEach((moerinvitation)=>
    console.log(`"hey ${moerinvitation},i'd love to catch up lunch! would you like to join me for delicious meal this "saturday" at 1:30" at "shanwari" let
        know if you're free `)
);

// Q17

let shrinkguestlist =["iqra","sana","noor"];
console.log(`${shrinkguestlist[1]} is not coming`)
shrinkguestlist.splice(1,1,"anshara");
console.log(`Hey everyone! we found a bigger lunch table. lets call some more gueset`);
shrinkguestlist.unshift("arub");
shrinkguestlist.push("sehar");
let middGueset: number=Math.floor(moreGuestList.length/2);
shrinkguestlist.splice(middGueset,0,"amarah");
shrinkguestlist.forEach((shrinkinvitation)=>
console.log(`hey ${shrinkinvitation},i'd love to catch up lunch! would you like to join me for delicious meal this "saturday" at 1:30" at "shanwari" let
        know if you're free `)
    );
    console.log("unfortunately , new lunch table  not bigger i have just space for 2 person")
    while(shrinkguestlist.length>2){
        let removeguest=shrinkguestlist.pop();
        console.log(`sorry, ${removeguest} may not invite you for lunch`)
    }
    console.log("invitation to the 2 person");
    shrinkguestlist.forEach(guestinvitation =>
        console.log(`hey ${guestinvitation} you are still invited for lunch`));
        shrinkguestlist.pop();
        shrinkguestlist.pop();
        console.log(shrinkguestlist,"empty list"); 

 // Q18

 let placesToVisit: string[] = ["Kyoto", "Machu Picchu", "Santorini", "New Zealand", "Iceland"];
 console.log("Original order:", placesToVisit);       
console.log("Alphabetical order:", [...placesToVisit].sort());
console.log("Still in original order:", placesToVisit);
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
console.log("Still in original order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);

// Q19

let placesToVisited: string[] = ["Kyoto", "Machu Picchu", "Santorini", "New Zealand", "Iceland"];
console.log("Original order:", placesToVisited);
console.log("Alphabetical order:", [...placesToVisited].sort());
console.log("Still in original order:", placesToVisited);
console.log("Reverse alphabetical order:", [...placesToVisited].sort().reverse());
console.log("Still in original order:", placesToVisited);
placesToVisited.reverse();
console.log("Reversed order:", placesToVisited);
placesToVisited.reverse();
console.log("Back to original order:", placesToVisited);
placesToVisited.sort();
console.log("Sorted in alphabetical order:", placesToVisited);
placesToVisited.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisited);
let lunchGuests: string[] = ["Alina", "noor", "sana"];
console.log(`I am inviting ${lunchGuests.length} people to lunch.`);

// Q20

let favoriteBooks: string[] = ["To Kill a Mockingbird", "1984", "The Great Gatsby", "Pride and Prejudice", "The Hobbit"];
console.log("Original order:", favoriteBooks);
console.log("Alphabetical order:", [...favoriteBooks].sort());
console.log("Still in original order:", favoriteBooks);
console.log("Reverse alphabetical order:", [...favoriteBooks].sort().reverse());
console.log("Still in original order:", favoriteBooks);
favoriteBooks.reverse();
console.log("Reversed order:", favoriteBooks);
favoriteBooks.reverse();
console.log("Back to original order:", favoriteBooks);
favoriteBooks.sort();
console.log("Sorted in alphabetical order:", favoriteBooks);
favoriteBooks.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", favoriteBooks);
console.log(`I have ${favoriteBooks.length} favorite books.`);
