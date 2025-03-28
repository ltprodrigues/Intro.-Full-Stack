//second file
console.log(b);

// TOPIC 1: Async function
//keyword => async
async function promiseReturner () {
    return "This is a Promise Object"

}

//calling
console.log("Asyn Function: ", promiseReturner());

//TOPIC 2:
async  function processPay(){
    try{
        let data = await payfull();
        console.log("Processing Pay");
    }
    catch(err){
        console.log("Error: ", err);
    }
}
console.log("Await async: ", processPay());
console.log("Processing pay..........")
//THEN AND CATCH

function promiseReturner1 () {
    return Promise.resolve("Resolved"); //Promise Object
}
let p1 = promiseReturner1();
console.log("Resolved: ", p1);

async function promiseReturner2() {
    let p2 = new Promise((resolve, reject) => {
        let Success = true;
        if (Success){
            resolve("Success");
        }else{
            reject(new Error("Something went wrong"));
        }
    });

    return p2;
}
console.log("Resolve and Reject: ",  promiseReturner2());
promiseReturner2().then(()=>console.log("Success")).catch((err)=>console.log(err));