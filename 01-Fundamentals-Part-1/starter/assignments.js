// let country = "United States of America";
// let continent = "North America";
// let population = "579 million";

// console.log(country);
// console.log(continent);
// console.log(population);

// let isIsland = false;
// let language
// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);

// BMI calculation = 
// BMI = mass / height ** 2 = mass / (height * height)

let markMass = 78;
let johnMass = 95;
let markHeight = 1.69;
let johnHeight = 1.88;

let BMIMark = markMass / markHeight ** 2;
let BMIJohn = johnMass / johnHeight ** 2;

let markHigherBMI = BMIMark > BMIJohn;

console.log (BMIJohn, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log (`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})`);
} else {
    console.log (`Johns's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})`);
}