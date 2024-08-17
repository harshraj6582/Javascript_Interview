// // // // A Promise is an Object representing the eventual Comnpletion or failure od an 
// // // // an synchronous operation . It is a way to handle the 
// // // //asynchronous operation in Javascript 

// // // // States of Promise 
// // // // 1-> Pending 
// // // // 2-> Fulfilled 
// // // // 3-> Rejected 


// // // let promise = new Promise((resolve , reject) =>{
// // //     // Asynchronous Operation 
// // //     let success = true ;
// // //     if(success){
// // //         resolve("Operation was Successful");
// // //     }
// // //     else {
// // //         reject("Operation is being failed");
// // //     }
// // // });

// // // promise
// // //     .then(result => {
// // //        return result + " and more";

// // //     })
// // //     .then(newResult =>{
// // //         console.log(newResult);
// // //     })
// // //     .catch(error =>{
// // //         console.log(error);
// // //     })
// // //     .finally(() =>{
// // //         console.log("Operation is Complete")
// // //     })

// // // let promise1 = Promise.resolve("First");
// // // let promise2 = Promise.resolve("Second");


// // // Promise.all([promise1, promise2])
// // //     .then(results => {
// // //         console.log(results);
// // //     })
// // //     .catch(error =>{
// // //         console.log(error);
// // //     })

// // // Race Condition is occured when the resolves or rejects 
// // // as soon as one of the promise in the array resolves or objects 

// // // let promise1 = new Promise((resolve,reject) => setTimeout(resolve , 500 , "First"));
// // // let promise2 = new Promise((resolve,reject) => setTimeout(resolve , 100 , "Second"));

// // // Promise.race([promise1 , promise2])
// // //     .then(result => {
// // //         console.log(result);
// // //     });

// // // let promise1 = new Promise((resolve , reject) => {
// // //     setTimeout(() => {
// // //         resolve("Operation Being Sucessfull after 2 Seconds");
// // //     },2000);
// // // });

// // // promise1.then(message => {
// // //     console.log(message);
// // // })

// // let promise = new Promise((resolve , reject) =>{
// //     setTimeout(() => {
// //         resolve("Operation is being Successfull after 2 Seconds");
// //     },2000)
// // });

// // promise.then(message => {
// //     console.log(message);
// // })

// // setTimeout(() => {
// //     console.log("Delayed for 1 Second")
// // }, 1000);

// // setTimeout(() => {
// //     console.log("This is being the first message")
// // },5000);
// // setTimeout(() => {
// //     console.log("This is just being the Second message");
// // },3000);

// // setTimeout(() => {
// //     console.log("This is the Third Message");
// // },1000);

// // const myArray = ["zero" , "one" , "two"];
// // myArray.myMethod = function (sProperty) {
// //     console.log(arguments.length > 0 ? this[sProperty] : this);
// // };

// // myArray.myMethod();
// // myArray.myMethod(1);

// // const myArray = ["zero" , "one" , "two"];
// // const myBound = function (sProperty) {
// //     console.log(arguments.length > 0 ? this[sProperty] : this);
// // }.bind(myArray);

// // myBound(); // Prints "zero One Two " because this is Bound to my ARray in the function 
// // myBound(1); // Prints the Valye of "one";
// // setTimeout(myBound , 1.0*1000);
// // // Still Prints the Value of Zero One Two after 1 Seconds because of Binding 
// // setTimeout(myBound , 1.5*1000 , "1");

// // What are Being the Arrow Functions 
// // Arrow Function are a Shorter way to write functions in javascript 
// // They are used especially when you need to write the simple 
// // functions quickly 

// function example() {

//     return "Hello World This is a Normal Function "
// }

// const example1 = () => "Hello World this is from the Arrow Function";

// Simple Delay Execution with the Arrow Function 

// const delay = (ms) => new Promise((resolve) =>{
//     setTimeout(() =>{
//         resolve(`Resolved this after ${ms} milli seocnds`)
//     })
// });

// delay(1000).then((message) => console.log(message));

// const delay = (ms) => new Promise((resolve) =>{
//     setTimeout(() => resolve(`Resolved after${ms} milliseconds`))
// });

// delay(1000)
//     .then((msg) => {
//         console.log(msg);
//         return delay(2000);
//     })
//     .then((msg) => {
//         console.log(msg);
//         return delay(3000);
//     })
//     .then((msg) => console.log(msg));

// const timeoutPromise = (ms) => new Promise((_, reject) => {
//     setTimeout(() => reject(new Error(`Rejected This after ${ms}`)),ms)
// });
// timeoutPromise(2000).catch((error) => console.log(error.message));

// const delay = (ms) => new Promise((resolve) => {
//     setTimeout(() => resolve(`Resolved after ${ms} Milliseconds`))
// });

// const runAll = () => {
//     const promises = [delay(1000) , delay(2000) , delay(3000)];
//     Promise.all(promises).then((res))
// }

// Async / await is a modern way to handle  the asynchronous code in 
// in Javascript making it easier to read and write . It is built on the top of 
// Promises and allow you to work with asyncgronpus operations 

// async keyword is placed before a function to make it return a Promise 

// async function fetchData() {
//     return "Data fetched";
// }

// fetchData().then((result) => console.log(result));

// Await keyword can be only used inside an async function async function . It pauses the execution 
// of the function until the Promise is resolved or rejected .

// async function fetchData() {
//     let result = await new Promise((resolve) =>{
//         setTimeout(() => resolve("Data Fetched"),2000)
//     });

//     console.log(result);
// }

// fetchData();

// async function fetchData() {
//     try {
//         let result = await new Promise((_,reject) =>{
//             setTimeout(() => reject(new Error("Failed to fetch Data")))
//         });
//     }
//     catch(error) {
//         console.error(error.message);
//     }
// }

// fetchData();

// async function fetchData() {
//     let result = await new Promise((resolve) => {
//         setTimeout(() => resolve("Data fetched!"), 1000);
//     });
//     console.log(result);
// }

// fetchData();

// async function fetchData() {
//     let result = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await result.json();
//     console.log(data);
// }
// fetchData()

// async function fetchData() {
//     try {
//         let result = await fetch("https://jsonplaceholder.typicode.com/posts");
//         let data = await result.json();
//         console.log(data);
//     }
//     catch(error){
//         console.error("An Error Occured" , error)
//     }
// }

// fetchData();

// async function task1() {
//     return new Promise((resolve) => setTimeout(() => resolve("Task 1 is just being compleetd"),2000));
// }

// async function task2() {
//     return new Promise ((resolve) => setTimeout(() => resolve("Task 2 is being Completed"),1000));
// }

// async function runTasks(){
//     const[result1 , result2] = await Promise.all([task1(), task2]);
//     console.log(result1 , result2)
// }

// runTasks();

// async function processOrders(orderIds) {
//     for (let id of orderIds) {
//         try {
//             const order = await fetch(`https://api.example.com/order/${id}`);
//             const orderData = await order.json();
//             console.log(`Order ${id}:`, orderData);
//         } catch (error) {
//             console.error(`Failed to process order ${id}:`, error);
//         }
//     }
// }

// processOrders([101, 102, 103]);
