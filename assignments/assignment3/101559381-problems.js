"use strict";

//function constructor 1: to find area and perimeter of a circle
function Circle(radius){
    this.radius = radius;

    this.area = function(){
        return parseFloat((Math.PI * this.radius * this.radius).toFixed(2));
    }

    this.perimeter = function(){
        return parseFloat((2 * Math.PI * this.radius).toFixed(2));
    }
}

console.log(new Circle(5).area()); //78.54
console.log(new Circle(5).perimeter()); //31.42


// array function 2: to calculate the salary of a employee
const calculateSalary = (workedHours) => {
    return workedHours.reduce((total, dailyHours, index) => {
         let dailySalary = 0;

         if (index < 5) {  // Monday to Friday
             if (dailyHours <= 8) {
                 dailySalary = dailyHours * 10;  
             } else {
                 dailySalary = (8 * 10) + ((dailyHours - 8) * 15);
             }
         } else {  // Saturday and Sunday
             if (dailyHours <= 8) {
                 dailySalary = dailyHours * 10 * 2;  
             } else {
                 dailySalary = (8 * 10 * 2) + ((dailyHours - 8) * 15 * 2);
             }
         }

         return total + dailySalary;
     }, 0);
 }
 
 console.log(calculateSalary([0,0,0,0,0,12,12])); // Should print 760



 // array function 3: to multiply each element by its index and return the sum
 const indexMultiplier = (array) => 
     array.reduce((sum, num, index) => sum + (num * index), 0);

console.log(indexMultiplier([-5,0,5])); // 5


//array function 4: filter JSON objects based on id and username
const filteredJSON = (array) => 
     array.filter(({id, u}) => 
        id > 10 &&  /^[M-Z]/i.test(u)
    
    );

    console.log(filteredJSON([{ id: 9, username: 'Mark' }]));// Expected: []


//array function 5: to break an array into subarrays of n elements
    const breakAway = function (array, n) {
    let result = [];
    for (let i = 0; i < array.length; i += n) {
        result.push(array.slice(i, i + n));
    }
    return result;  
    
}
console.log(breakAway([1,2,3,4,5,6,7,8,9], 2)); // [[1,2], [3,4], [5,6], [7,8], [9]]