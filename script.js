// 1
for (i = 1; i <= 7; i++){
    console.log(i);
}
console.log("======================");
// 2
for (i = 5; i <= 25; i += 4){
    console.log(i);
}
console.log("======================");
// 3a
const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
];
// 3b
for (person of wizards){
    console.log(person);
}
console.log("======================");
// 4a
let harryPotterMovies = 0;
while (harryPotterMovies < 8){
    harryPotterMovies++;
};
// 4b
console.log(harryPotterMovies);


console.log("===========BONUS===========");
// 5a
const hogwartsHouses = [
    `Gryffindor`,
    `Hufflepuff`,
    `Ravenclaw`,
    `Slytherin`
];
// 5b
for (house of hogwartsHouses){
    for (char of house){
        console.log(char);
    }
    console.log('\n');
}

console.log("======================");
// 6a
const quote = [
    `Yer`,
    `A`,
    `Wizard`,
    `Harry`
];
// 6b
let finalQuote = ""
for (word of quote){
    for (letter of word){
        finalQuote += letter;
    }
    finalQuote += " ";
}
console.log(finalQuote);

console.log("======================");
// 7
for (k = 1; k <= 25; k++){
    if (k % 3 == 0 && k % 5 == 0){
        console.log(`Expecto Patronum`);
    }else if (k % 5 == 0){
        console.log(`Patronum`);
    }else if (k % 3 == 0){
        console.log(`Expecto`);
    }else{
        console.log(k);
    }
}