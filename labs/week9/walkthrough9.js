//1. One d. two d array => []
const oned = [1, 2, 3];
console.log("1-D", oned);

const twod = [["A", "B",],
    [5,6],
    ["C", "D"]
];
console.log("2-D", twod);

//number of elements in a array => length
console.log("Number 1-D: ", oned.length);
console.log("Number of elements in 2-D: ", twod[1].length);

//2. Scope of a variable in a function
let a = 5 //global
function outer (name) {
     console.log("Outer function: " + a);
    console.log("Outer function: " + name);
     function inner() {
         let b = 10
         console.log("Inner function: " + a);
         console.log("Inner function: " + b); //local var
         console.log("Inner function: " + name); //global var
     }
    // console.log("Inner function: " + b); //undefined error
     inner();
}
outer("Leticia");

//3. Example of classes
//syntax => class ClassName{};
//name, address, city
//parse the parameters/arguments => constructor
class Customer {
    constructor(name, address, city) {
        this.name = name;
        this.address = address;
        this.city = city;
    }
}
//need to create instance => new keyword

let cust1 = new Customer("Leticia", "1 street", "Toronto");

let cust2 = new Customer("Marina", "2 lollipop avenue", "London");

console.log("Customer 1: ", cust1);
console.log("Customer 2: ", cust2);

//4. callback

function SumAndAvg (numbers, callback) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; //add
    }
    let avg = sum/numbers.length;
    callback(sum, avg);
}
function display (sum, avg) {
    console.log("Sum: ", sum);
    console.log("Average: ", avg);
}

SumAndAvg([1,2], display);
SumAndAvg([5, 5], display);

//5. JSON

const person = {
    name: "Leticia",
    address: "123 avenue",
    city: "London",
}

//convert json into string => stringfy

let conv_string2 =  JSON.stringify(person);
console.log(conv_string2);