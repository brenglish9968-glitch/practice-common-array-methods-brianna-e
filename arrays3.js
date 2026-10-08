let drinkOrders= ["Latte", "Tea", "Espresso"];
let pastryOrders= ["Croissant", "Muffin", "Bagel"];
console.log(drinkOrders.length);
console.log(pastryOrders.length);

console.log("Selected Drink:" + drinkOrders);
console.log("Selected Pastry:" + pastryOrders);

console.log("Selected Drink:" + drinkOrders[0]);
console.log("Selected Pastry:" + pastryOrders[2]);

console.log("Selected Drink:" + drinkOrders[0]);
console.log("Selected Pastry:" + pastryOrders[1]):

let drinkIndex= 2;
let pastryIndex= 0;
console.log(`Order: ${drinkOrders[drinkIndex]} and a ${pastryOrders[pastryIndex]}`);

console.log(`Total drinks tracked: ${drinkOrders.length}`);
console.log(`Total pastries tracked: ${pastryOrders.length}`);

for (let i= 0; i < drinkOrders.length; i++){
    console.log(`Drink # ${i+1}: $drinkOrders[i]}`);
}

for (let i= 0; i < pastryOrders.length; i++){
    console.log(`Pastry # ${i+1}: $pastryOrders[i]}`);
}

drinkOrders.push ("Matcha");
pastryOrders.push ("Scone");

console.log (`Total Drinks: ${drinksOrders.length}`);
console.log (`Total Pastries: ${pastryOrders.length}`);

drinkOrders.push("Flat White");

console.log(`Updated number of drinks: ${drinkOrders.length}`);

let selectedDrinkIndex= 3;
let selectedPastryIndex= 0;

console.log(`Selected Order: ${drinkOrders[selectedDrinkIndex]} and a ${pastryOrders[selectedPastryIndex]}`);
