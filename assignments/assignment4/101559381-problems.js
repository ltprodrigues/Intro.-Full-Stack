"use strict";

//Async 1: get random number
async function getRandomNumber() {
    return new Promise(resolve => 
        (setTimeout(() => resolve(Math.floor(Math.random() * 5)+1), 5)));
}
// Test the function
// (async () => {
//     const randomNumber = await getRandomNumber();
//     // randomNumber();
//     console.log(randomNumber); // This will log the random number after 5ms
// })();

// console.log(getRandomNumber()); // This will log a Promise object, not the number itself

//Async 2: Get City Data