// A Promise is an Object that represents the eventual completion for the failure of the asynchronous operation 
// and its resulting value . Promise allow you to write the asynchrnous code that is more Readable and 
// easier to manage 

// const myPromise = new Promise((resolve , reject) =>{
//     const success = true ; 

//     if(success){
//         resolve("The Operation is Being Successfull ");
//         console.log("The Code is being complete")
//     }
//     else {
//         reject("Operation is being failed")
//     }
// });

// myPromise.then((message) =>{
//     console.log(message)
// })
// SO basically the Promise resolve and reject the Code 
// .then returns the the console.log statement because it returns the 
// Resolve statement 

// const harsh1 = new Promise((resolve , reject) =>{
//     // This is basically the Promise which is being either Resolved 
//     // Or bein Rejected 
//     const ayush1 = true ; 

//     if(ayush1){
//         // This statement is being executed when the Promsie 
//         // Return the True 
//         resolve("This is the Output of the Code");
//         console.log("The Code is being Successfully Executed");
//     }

//     else{
//         // This statment is being Executed when their is error in 
//         // this code 
//         reject("The Promise is getting Failed");
//     }
// })

// // The Promise is completely being written 
// harsh1.then((msg) =>{
//     console.log(msg);
// })
// .catch((error)=>{
//     console.log(error)
// })


// Javascript is indeed single threaded meaning that it can execute 
// piece of code at a time . However the asynchronous behavior of Promsise 
// and the other asynchrionous Operations  is made possible bu the Way JavaScript 
// Handles the tasks in the Event Loop 

// Javascript Execution COntext 
// JavaScript runs in a Single threaded environment meaning it has one call stack that handles the execution of the functions 
// When the Function is called it is added to the call stack . Once the function gets completed 
// it is removed 

// When you Promise or use the other asynchrnous operations
// like the SetTimeout , fetch or the DOM Evenet the Operations often involve Web API Provioded by the 
// Browser 
// These Web API can handle task outside the main thread . 
// For Instance if you use the SetTimeout the timer runs the background 

// After the Event Loop and the Task Queue 
// After the Background Task it doesnot immediately Execute the Callback 

// The callback is placed in a task queue or the microtask queue 
// The event Loop constantly checks if the call stack is being empty 
// If there is task in the queue the event loop moves the first task in the queue 

// Promises use the concept of Microtask queue which has the higher 
// Priority than the regular task queue . Once the Promise is being Resolved or bieng Rejected 

console.log("Start");

const promise = new Promise((resolve) =>{
    console.log("Promise Intialized");
    setTimeout(() =>{
        resolve("Promise is Being Resolved ");
    },1000)
});

promise.then((message) =>{
    console.log(message)
});

console.log('End')


















