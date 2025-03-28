"use strict";

//function 1: to find the number of digits in a string
function _findNumOfDigits(arg){

    let str = arg.toString(); //convert input to string
    let count = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] >= '0' && str[i] <= '9'){
            count++;
        }
    }
    return count;


}

console.log(_findNumOfDigits("1000")); //4
console.log(_findNumOfDigits("abcd")); //0  


//function 2: to return the string that is passed in
function _surplus(str) {
    const innerFunction = function(){ //nested function
        return str;
    };
    return innerFunction;
   
}

console.log(_surplus("orange")()); //orange


//function 3: to return an array of strings that contain numbers
function _strNumbers (array){ 
    
    return array.filter(str => /\d/.test(str));

}

console.log(_strNumbers(["1a", "a", "2b", "b"])); //["1a", "2b"]


//function 4: to determine the number of students who passed, failed and the average grade
function _determineClassGrading(array){
    let passingGrade = 0;
    let failingGrade = 0;
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] >= 50){
            passingGrade++;
        }else{
            failingGrade++;
        }
        sum += array[i];
    }

    let average = sum / array.length;
    average = Math.round(average * 10) / 10;

    return [passingGrade, failingGrade, average];

}
console.log(_determineClassGrading([50, 51, 80, 45])); //[3, 1, 56.5]

// arrow function to move capital letters to the front of the string
const _moveCapitalLetters = (str) => {
    let capitalLetters = "";
    let lowerCaseLetters = "";

    for(let i = 0; i < str.length; i++){
        if(str[i] >= 'A' && str[i] <= 'Z'){
            capitalLetters += str[i];
        }else{
            lowerCaseLetters += str[i];
        }
    }
    return capitalLetters + lowerCaseLetters;
}

