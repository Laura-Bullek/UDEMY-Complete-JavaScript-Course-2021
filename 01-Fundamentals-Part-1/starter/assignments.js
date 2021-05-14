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

// let markMass = 78;
// let johnMass = 95;
// let markHeight = 1.69;
// let johnHeight = 1.88;

// let BMIMark = markMass / markHeight ** 2;
// let BMIJohn = johnMass / johnHeight ** 2;

// let markHigherBMI = BMIMark > BMIJohn;

// console.log (BMIJohn, BMIJohn, markHigherBMI);

// if (BMIMark > BMIJohn) {
    // console.log (`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})`);
// } else {
//     console.log (`Johns's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})`);
// }

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. 
The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that as well 
(draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, 
a team only wins if it has a higher score than the other team, 
and the same time a score of at least 100 points. 
HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw!
 So a draw only happens when both teams have the same score and both have a 
 score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀*/

// let dolphinScoreAverage = Math.floor((96 + 108 + 89) / 3);
// let koalaScoreAverage = Math.floor((81  + 91 + 110) / 3);

// console.log(dolphinScoreAverage, koalaScoreAverage)

// if (dolphinScoreAverage > koalaScoreAverage){
//     console.log(`The dolphins won with an average score of ${dolphinScoreAverage}!`);
// }else if(koalaScoreAverage > dolphinScoreAverage){
//     console.log(`The koalas won with an average score of ${koalaScoreAverage}!`);
// }else if (dolphinScoreAverage === koalaScoreAverage) {
//     console.log(`The dolphins and the koalas tied!`);
// }

// The Switch Statement 

let language = '';

switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST unmber of native speakers')
        break
    case ('spanish'):
        console.log('Second place in number of native speakers')
        break
    case ('english'):
        console.log('Third place')
        break
    case ('hini'):
        console.log('Number Four')
    case ('arabic'):
        console.log('Fifth most spoken language')
        break
    default:
        console.log('Great language too!')
    }

// The Conditional (Ternary) Operator
function population(num){
    return (num > 33 ? "Portugal is above average" : "Portugal is below average")
}







