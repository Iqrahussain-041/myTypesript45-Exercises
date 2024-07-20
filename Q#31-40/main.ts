// Q31

let UserName=["ali","ahsan","admin","amar"]
UserName=[]
if(UserName.length===0){
    console.log("your array is empty we need to find some user!");
    
}else{UserName.forEach(oneUser=>{
    if(oneUser==="admin"){
        console.log(`hello ${oneUser} would you like to see a status report?`)
    }else{
        console.log(`hello ${oneUser} thank you for logging in again.`)
    }
})
    
}
// Q32

let Current_User =["areeb","aeni","ayesha","alina","sana"];

let New_User=["areeb","iqra","sana","alisha","aeni"];
New_User.forEach(newone_user=>{
    let condition=Current_User.some(newcheck_one=>newcheck_one.toLowerCase()===newone_user.toLowerCase())
    if(condition){
        console.log(`sorry ${newone_user} is already taken`)
    }else{
        console.log(`this username ${newone_user} avalible`)
    }
})

// Q33

let numbers=[1,2,3,4,5,6,7,8,9];
for( let onenum of numbers){
    let ordinalNum:string;
    if(onenum===1){
        ordinalNum="st"
    }
    else if(onenum===2){
          ordinalNum="nd"
    }
    else if(onenum===3){
          ordinalNum="rd"
    }
    else{
        ordinalNum="th"
    } 
    console.log(`${onenum} ${ordinalNum}`);     
}
// Q34

let Pizza =["chicken tikka","superious","fajita"];
for(let onepizza of Pizza){
    console.log(`I  like ${onepizza}pizza`);

}
console.log("i love pizza");
console.log("i eat pizza");

// Q35

let petAnimal=["cat","dog","rabbit"]
for(let oneanimal of petAnimal){
    console.log(`A ${oneanimal} would make a great pet`);
}
console.log("any of these animal would make a great pet");

// Q36
function make_shirt (size:string,printmassage:string){
    console.log(`you selected ${size} size shirt with ${printmassage} prints on shirt`)
}
make_shirt("small","joyfull day")

// Q37

function makes_shirt (sizes:string = "large",printsmasge: string = "i love typescript"){
    console.log(` Create a ${sizes} shirt with the  ${printsmasge} print on shirt`)
}
makes_shirt();
makes_shirt("medium");
makes_shirt("small","i love css");

// Q38

function describe_city(city:string,country:string="pakistan"){
    console.log(`${city} is in ${country}`);
}
describe_city("karachi")
describe_city("lahore")
describe_city("cap_town","south africa")

// Q39

function city_country(city:string,country:string):string{
    return `${city}, ${country}`
}

console.log(city_country("karachi","pakistan"));
console.log(city_country("birmingham","london"));

// Q40

function  make_album(artist_name:string,albumtitle:string,count?:number){
    let album:{artist: string ,title: string , tracks?: number} = {
        artist:artist_name,
        title:albumtitle,
    };
    if (count !==undefined){
        album.tracks=count;
    }
    return album;
}
 let album1 =(make_album("iqra","album title 1"))
 let album2 =(make_album("ali","album title 1"))
 let album3 =(make_album("shan","album title 1",10))
 console.log(album1)
 console.log(album2)
 console.log(album3)