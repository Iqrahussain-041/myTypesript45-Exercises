//Q21

interface Itcourse {
    CourseName: string;
    Location:string;
    OnsitStudent:number;

}
let Itcourse ={
    CourseName: "typescript and Javasript",
    Location:"Governor house sindh",
    OnsitStudent:5000
};
console.log(Itcourse);

// Q22

let arrorArray:string[]= ["A","B","C","D"];
// console.log(arrorArray[10]);
console.log(arrorArray[1]);

// Q23

let nine =9;
let twenty = 20;
console.log("\n test 1 :nine is equal to 9? ");
console.log(nine==9);
console.log("\n test 2 :twenty is equal to 20? ");
console.log(twenty==20);
console.log("\n test 3:twenty is not equal to 9? ");
console.log(twenty!=9);
console.log("\n test 4:twenty is not equal to 6? ");
console.log(twenty!=6);
console.log("\n test 3:nine is not equal to 34? ");
console.log(twenty!=34);
// false
console.log("\n test 1 :nine is greater then  9? ");
console.log(nine>9);
console.log("\n test 2 :twenty is greater then to 0? ");
console.log(twenty<0);
console.log("\n test 3:twenty is not equal to 9? ");
console.log(twenty==9);
console.log("\n test 4:twenty is not equal to 6? ");
console.log(twenty==6);
console.log("\n test 3:nine is not equal to 34? ");
console.log(twenty==34);

// Q24

let apple ="apple";
console.log("Is apple is equal to apple?");
console.log(apple==apple);
console.log("\n Is apple is  not equal to apple?");
console.log(apple!=apple);
let UppercaseApple="APPLE";
console.log("Is APPLE is equal to apple after converting to lowercase?" );
console.log(UppercaseApple.toLowerCase()=="apple");
console.log("\n Is APPLE is not  equal to  apple after converting to lowercase?" );
console.log(UppercaseApple.toLowerCase()!="apple");
let six =6;
let seven =7;
console.log("\n Is six equal to 7?");
console.log(six==seven);
console.log("\n Is six is not equal to seven");
console.log(six!=seven);
console.log("\n seven is greater then six" );
console.log(seven>six);
console.log("\n seven is less then six" );
console.log(seven<six);
console.log("\n seven is greater then  or equal then 5" );
console.log(seven>=5);
console.log("\n seven is less then or equal to  six" );
console.log(seven<=six);

// Q25

let AlienColor="Pink";
if (AlienColor==="Pink"){
    console.log(" player just earned 5 points .")
};
if(AlienColor===" Black"){
    console.log("The version that fails will have no output")
};

// Q26

let alienskin = "green";
if(alienskin==="green"){
    console.log("\n player just earned 5 points for shooting the alien.")
}
else{
    console.log(" the player just earned 10 points.")
}
if(alienskin==="black"){
    console.log("my skin color not green")
}
else{
    console.log("else statement")
}

// Q27

// step1
let alienSkinColor ="purple";
if(alienSkinColor==="purple"){
    console.log("step 1 : you kill purple alien earned 5 points.");
}
else if(alienSkinColor==="orange"){
    console.log("step 1 : you kill orange alien earned 10 points.");
}
else if(alienSkinColor==="brown"){
    console.log(" step 1 : you kill brown alien earned 15 points.");
}
// step2
let alienSkinColor2 ="purple";
if(alienSkinColor2==="orange"){
    console.log(" step 2 : you kill purple alien earned 5 points.");
}
else if(alienSkinColor2==="purple"){
    console.log("step 2 : you kill orange alien earned 10 points.");
}
else if(alienSkinColor2==="brown"){
    console.log("step 2 : you kill brown alien earned 15 points.");
}
// step3
let alienSkinColor3 ="purple";
if(alienSkinColor3==="brown"){
    console.log(" step 3 : you kill purple alien earned 5 points.");
}
else if(alienSkinColor3==="orange"){
    console.log("step 3 : you kill orange alien earned 10 points.");
}
else if(alienSkinColor3==="purple"){
    console.log("step 3 : you kill brown alien earned 15 points.");
}

// Q28

let age=22
if(age<2){
    console.log("the person is a baby.");
}
else if(age >=2 && age< 4 ){
    console.log(" that the person is a toddler.");
}
else if(age >=4 && age< 13){
    console.log(" that the person is a kid.");
}
else if(age >=13 && age< 20){
    console.log("  the person is a teenager.");
}
else if(age >=20 && age< 65){
    console.log(" the person is an adult.");
}
else if(age >=65){
    console.log("the person is an elder.");
}
// Q29

let favoriteFruits=["banana","strawberry","pineapple"]
if(favoriteFruits.includes("banana")){
    console.log("I really like banana")
}
if(favoriteFruits.includes("strawberry")){
    console.log("I really like strawerry")
}
if(favoriteFruits.includes("kiwi")){
    console.log("I really like kiwi")
}
if(favoriteFruits.includes("watermelon")){
    console.log("I really like wateermelon")
}

if(favoriteFruits.includes("pineapple")){
 console.log("I really like pineapple")
}

// Q30

let UserName=["ali","amar","ahsan","admin","azan"];
UserName.forEach(oneUser=>{
    if(oneUser==="admin"){
        console.log(`hello${oneUser} would you like to see a status report?`)
    }else{
        console.log(`hello${oneUser} thank you for logging in again.`)
    }
})



