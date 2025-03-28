//PART B

const ages =[1,2]
const ages1 =[4, 5]
function calculateAge(agesArray){
    const result = agesArray.reduce((a, d) =>{
        return a + d;
    })
    return result;
}




//1. filter() => this method return few elements
//example1 = integers
const numbers = [1,2, 3, 4, 5];
//SYNTAX => varName.filter(function(){});
//let a = function(){}
//varName.filter(a);
console.log("numbers", numbers);
const filter_num = numbers.filter((number) =>{

    return number > 3;
});
console.log("filtered numbers", filter_num);
//example 2: string
const names = ["Joe", "John", "Leticia", "Rodrigues"]
console.log("Names:", names);
const filter_names = names.filter(function(name){
    const first_Char = name.charAt(0).toUpperCase();
    return first_Char > "J";
})
console.log("Filter Names:", filter_names);

//2 reduce() => this method return one element

const numbers3 = [1,2, 3, 4, 5];

console.log(" Before reduce numbers:", numbers3);
//to add you can create  the function like this
let d = function add (a,b) { let c= a + b; return c;}
const reduce_num1 = numbers3.reduce(d);

const reduce_num = numbers3.reduce((a, d)=> { return a + d}) //when using accumulator needs ()

console.log("Reduce numbers", reduce_num);
console.log("Reduce numbers", reduce_num1);

//example 2: string
const sentence = "I study at GBC College";
console.log("Sentence: ", sentence.split(" "));

const filter_string = sentence.split(" ").reduce((a, d)=>{return a;});
console.log("Filter string:", filter_string);
//3. MAP()

const numbers4 = [1,2,3,4,5];

const map_numbers = numbers4.map((num) => num * 2);

console.log("Map numbers:", map_numbers);

//
