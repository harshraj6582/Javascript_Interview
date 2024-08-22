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

// console.log("Start");

// const promise = new Promise((resolve) =>{
//     console.log("Promise Intialized");
//     setTimeout(() =>{
//         resolve("Promise is Being Resolved ");
//     },1000)
// });

// promise.then((message) =>{
//     console.log(message)
// });

// console.log('End')


// Taking the Order (Promise Creation) : 
// Imemdiate for Tasks - The Manager first check if you are done witn the current task .
//  Only when you are free the manager check if thre Promise that ready for the fullfilment 

// Micotask Queue . IF there are multiple cake orders finishing up . 
// The Manager will handle these task first before making any new order 

// The Simple Promise 

// const delayPromise = new Promise((resolve) =>{
//     setTimeout(() =>{
//         resolve("This is being exected after 2 seconds")
//     },2000);
// });

// // Using the Promise 
// delayPromise.then((message) =>{
//     console.log(message);
// })

// Pending - The Initial State  neither fullfilled or rejected 
// FulFilled - The Operation comppleted 

// const samplePromise = new Promise((resolve , reject) =>{
//     const success = false ; 

//     if(success){
//         resolve("Success");
//     }
//     else{
//         reject("Failure")
//     }
// });

// samplePromise
//     .then((message) =>{
//         console.log("Resolved" , message)
//     })
//     .catch((error) =>{
//         console.log("Rejected" , error)
//     })

// const chainPromise  = new Promise((resolve) =>{
//     resolve("step 1 Complete ");
// })

// chainPromise
//     .then((message) => {
//         console.log(message);
//         return "Step 2 Complete "
//     })
//     .then((message) =>{
//         console.log(message);
//         return "Step 3 Complete "
//     })
//     .then((message) =>{
//         console.log(message)
//     });

// const promise1  = Promise.resolve(3);
// const promise2 = new Promise((resolve) => setTimeout(resolve , 100 , 'foo'))
// const promise3 = Promise.resolve(42);

// Promise.all([promise1 , promise2 , promise3])
//     .then((values) => {
//         console.log(values);
//     })
// .catch((error) => {
//     console.error('One of the promises failed:', error);
// })

// const promise1 = new Promise((resolve) => {
//     setTimeout(()=>{
//         resolve("Hatrsh")
//     },1000)
// })

// const promise2  = new Promise((resolve) => {
//     setTimeout(()=>{
//         resolve("Hatrsh")
//     },5000)
// })

// Promise.race([promise1 , promise2])
//     .then((value) =>{
//         console.log(value);
//     })
//     .catch((error) => {
//         console.error('Race failed:', error);
//       });

// JavaScript Doesn't have built in Support for the Cancelling a Promise 


// function fetchData() {
//     return new Promise((resolve , reject) =>{
//         setTimeout(() => resolve('Data Recieved'))
//     },1000)
// }

// // Usign the Aync and Await keywords 
// // They allow you to write asynchrnous code in the 
// // synchrnous like manner 

// // Using the Async and Await 
// async function fetchDataAsync() {
//     try {
//         const data = await fetchData();
//         console.log(data);
//     }
//     catch(error) {
//         console.log(error)
//     }
// }
// fetchDataAsync();

// function wait(ms  , callback){
//     setTimeout(() =>{
//         callback(`Waited for ${ms} milliseconds`)
//     },ms);
// }


// function waitPromise(ms) {
//     return new Promise((resolve) =>{
//         wait(ms , resolve);
//     });
// }

// waitPromise(2000)
//  .then((message) => {
//     console.log(message);
//  })

// Calculate the Sum of Two Numbers 

// function sumOfTwoNumbers(a , b) {
//     return a + b ; 
// }

// console.log(sumOfTwoNumbers(3,5))

// function findtheMaxNumber(arr) {
//     return Math.max(...arr);
// }

// console.log(findtheMaxNumber([1,2,3,4,6,78,978,9]));

// function isPalindrome(str) {
//     return str === str.split('').reverse().join('')
// }

// console.log(isPalindrome("racecar"));
// Reverse the Given String 

// const  reverseString = (str) => str.split('').reverse().join('');

// console.log(reverseString("ahrshahsbd"))

// Filter the Given Even Numbers from an Array 

// function filterNumbers(numbers) {
//     return numbers.filter(num => num % 2 === 0)
// }

// console.log(filterNumbers([1,2,3,4,6,8]));

// function factorial(number) {
//     if(number === 0 || number === 1 ){
//         return 1 ; 
//     }
//     else{
//         return number * factorial(number  - 1 );
//     }
// }
// console.log(factorial(5));

// Check if the Given Number is Prime 

// function isPrime(num) {
//     if (num <= 1 ) return false ; 

//     for(let i = 2 ; i <= Math.sqrt(num) ; i++){
//         if(num % i ===  0 ) return false ; 
//     }
//     return true ; 
// }
// console.log(isPrime(11)); // Output: true
// console.log(isPrime(4));  // Output: false

// Fiind the Largest Element in a Nested Array 

// function findLargestElement(nestedArray) {
//     let largest = nestedArray[0][0];
//     for(let arr of nestedArray) {
//         for(let num of arr) {
//             if(num > largest){
//                 largest = num ; 
//             }
//         }
//     }
//     return largest ; 
// }
// console.log(findLargestElement([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

// Return the Fibinacci Sequence up to a Gu=iven Number of Terms 
// function fibonacciSequence(numTerms) {
//     if (numTerms <= 0) return [];
//     if (numTerms === 1) return [0];
  
//     let sequence = [0, 1];
//     while (sequence.length < numTerms) {
//       let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
//       sequence.push(nextNumber);
//     }
//     return sequence;
//   }
  

//   console.log(fibonacciSequence(5)); 
  