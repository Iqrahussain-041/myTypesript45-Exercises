// Q41

const magicians: string[] = ["Houdini", "Copperfield", "Blaine", "Angel", "Penn", "Teller"];
function show_magicians(magicianList: string[]): void {
    magicianList.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);

// Q42

const Magicians: string[] = ["Houdini", "Copperfield", "Blaine", "Angel", "Penn", "Teller"];
function make_great(magicianList: string[]): void {
    for (let i = 0; i < magicianList.length; i++) {
        magicianList[i] = "the Great " + magicianList[i];
    }
}
function show_Magicians(magicianList: string[]): void {
    magicianList.forEach(magician => {
        console.log(magician);
    });
}
make_great(Magicians);
show_magicians(Magicians);

// Q43

const magIcians: string[] = ["Houdini", "Copperfield", "Blaine", "Angel", "Penn", "Teller"];
function make_Great(magicianList: string[]): string[] {
    const greatMagicians: string[] = magicianList.map(magician => "the Great " + magician);
    return greatMagicians;
}
function showmagicians(magicianList: string[]): void {
    magicianList.forEach(magician => {
        console.log(magician);
    });
}
const GreatMagicians: string[] = make_Great([...magicians]);
console.log("Original Magicians:");
showmagicians(magicians);
console.log("\nGreat Magicians:");
showmagicians(GreatMagicians);

// Q44

function order_sandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("  - No items requested.");
    } else {
        items.forEach(item => {
            console.log(`  - ${item}`);
        });
    }
    console.log("\n");
}
order_sandwich("Lettuce", "Tomato", "Bacon");
order_sandwich("Turkey", "Cheese");
order_sandwich("Ham", "Pickles", "Mustard", "Onions", "Pepperoni");

// Q45

type CarProperties = {
    [key: string]: string;
};
function createCar(manufacturer: string, model: string, properties: CarProperties): object {
    let car = {
        manufacturer: manufacturer,
        model: model,
        ...properties
    };
    return car;
}
let car1 = createCar("Toyota", "Camry", { color: "blue", feature: "sunroof" });
let car2 = createCar("Tesla", "Model S", { color: "red", autopilot: "true" });
let car3 = createCar("Ford", "Mustang", { color: "black", package: "GT", year: "2022" });
console.log(car1);
console.log(car2);
console.log(car3);