// // // // Basic Structur of Promise 
// // // A promise is an object that represents the eventual completion of an synchronous operation and resulting its value 

// // const promise = new Promise((resolve, reject)=>{
// //     // Asynchronous Operation goes here 

// //     // If the Operation is being successful , the  call resolve 
// //     resolve('Success Message');

// //     // If Something goes wromg call reject 
// //     reject('Error Message')
// // });

// // const promise1 = new Promise((resolve , reject)=>{
// //     setTimeout(() =>{
// //         resolve("I am a Promise")
// //         // If you wanted to rejct , you would call the reject ('Some Error)
// //     },5000)
// // });

// // promise1.then((value)=> console.log(value))
// //         .catch((error) => console.log(error))

// // const harshPromise = new Promise((resolve , reject) =>{
// //     setTimeout(() =>{
        
// //         resolve("I will be executing after 5 seconds");
// //     },5000);
// // });
// // harshPromise.then((message) => console.log(message))
// // .catch((error) => {
// //     console.log("Error" + error);
// // })

// // Basic Exercise with promise with Resolve  and reject 


// // const randomPromise = new Promise((resolve , reject)=>{

// //     setTimeout(() =>{
// //         if (Math.random() > 5.5){
// //             resolve("Promise is being Resolved ")
// //         }
// //         else{
// //             reject("Promise is being rejected")
// //         }
// //     },2000)

// // });

// // randomPromise
// //     .then((message) => console.log(message))
// //     .catch((error) => console.log(error))


// // Chaining of Promises 
// // Create a Series of Promises where the first promise resolve 
// // with a number and each subsequent Promise add 10 to that number . 
// // Chain these Promise together 

// // This would be helpful in Creatting a Certain Ordered Number 
// // of the task which  would be in the increasing 

// const startPromise = new Promise((resolve)=>{
//     resolve(10);
// });
// startPromise
//     .then((value)=>{
//         console.log("First" , value);
//         return value + 10 ;
//     })
//     .then((value) =>{
//         console.log("Second", value);
//         return value + 10 ;
//     })
//     .then((value)=>{
//         console.log("Third", value);
//         return value + 10 ;
//     })
//     .then((value) =>{
//         console.log("final Result" , value)
//     })

//     // Practising the Promise.all 
    
//     const promise1 = new Promise((resolve) =>{
// //         setTimeout(() => resolve("First Promise"),1000);
// //     });

// //     const promise2 = new Promise((resolve)=>{
// //         setTimeout(() => resolve("Second Promise"),2000);
// //     });

// //     const promise3 = new Promise((resolve) =>{
// //         setTimeout(() => resolve("Third Promise"),3000);
// //     });

// //     Promise.all([promise1 , promise2 , promise3])
// //         .then((results) => {
// //             console.log("All the Promises are Resolved");
// //             console.log(results);
// //         });

// //         const errorPromise = new Promise((resolve) => {
// //             resolve(100);
// //         });
        
// //         errorPromise
// //             .then((value) => {
// //                 console.log("Step 1:", value);
// //                 return value + 50;
// //             })
// //             .then((value) => {
// //                 console.log("Step 2:", value);
// //                 return value + 50;
// //             })
// //             .then((value) => {
// //                 console.log("Step 3: Throwing error");
// //                 throw new Error("Something went wrong!");
// //             })
// //             .catch((error) => {
// //                 console.log("Caught Error:", error.message); // Corrected line
// //             });
        


// // function delayLog(message , delay ){
// //     return new Promise((resolve) =>{
// //         setTimeout(() =>{
// //             console.log(message);
// //             resolve();
// //         }, delay)
// //     });
// // }
// // delayLog("Logging this statement Statement after 1 second",1000)
// //     .then(() => delayLog("Log this after 2 seconds",2000))
// //     .then(() => delayLog("Log this statement after 3 seconds",3000));


// // function simulateApiCall(success) {
// //     return new Promise((resolve , reject) =>{
// //         setTimeout(() =>{
// //             if(success){
// //                 resolve({data : "Fake API Data"});
// //             }
// //             else{
// //                 reject(new Error("API Call Failed"));
// //             }
// //         },2000)
// //     });
// // }
// // simulateApiCall(true)
// //     .then((response) =>{
// //         console.log("API Call Success :", response.data);
// //     })
// //     .catch((error) => {
// //         console.log("API Call Error" , error.message)
// //     });

// function delayMessage(message , delay) {
//     return new Promise((resolve) => {
//         setTimeout(() =>{
//             resolve(message);
//         },delay)
//     });
// }
// delayMessage("Hello After 2 Seconds",2000).then((msg)=> {
//     console.log(msg);
// })

// function countdown(start) {
//     return new Promise((resolve)=>{
//         const intervalId = setInterval(()=>{
//             console.log(start);
//             if(start == 0) {
//                 clearInterval(intervalId);
//                 resolve(); // Resolve the Promise when countdown reaches 0 
//             }
//             start--;
//         },1000);
//     });
// }
// countdown(5).then(()=> console.log("CountDown Complete"));

// function count(start) {
//     return new Promise((resolve) =>{
//         const intervalId = setInterval(() =>{
//             console.log(start);
//             if(start === 0){
//                 clearInterval(intervalId);
//                 resolve();
//             }
//             start--;
//         },1000)
//     });
// }
// count(5).then(() => console.log("CountDown Complete"));

// function sequentialDelay(messages , delays){
//     let promiseChain = Promise.resolve();

//     messages.forEach((message , index) =>{
//         promiseChain = promiseChain.then(() =>{
//             return new Promise((resolve) =>{
//                 setTimeout(() =>{
//                     console.log(message);
//                     resolve();
//                 }, delays[index]);
//             });
//         });
//     });
//     return promiseChain; 
// }

// sequentialDelay(["First Message" , 'Second Message' , "Third Message"],
//     [1000,2000,3000]
// ).then(() => console.log("All the Message are bring Logegd "))


// function promiseOne() {
//     return new Promise((resolve) =>{
//         setTimeout(() => resolve("One"),1000)
//     });
// }

// function promiseTwo() {
//     return new Promise((resolve) =>{
//         setTimeout(() => resolve("THree"),3000)
//     });
// }

// Promise.all([promiseOne() , promiseTwo()])
// .then((values) => console.log(values));


function timeoutRace(promise1 , promise2 , timeout){
    const timeoutPromise = new Promise((_, reject)=>{
        setTimeout(() => {
            reject(new Error("Timeout Reached"))
            
        }, timeout);
    })
    return Promise.race([promise1 , promise2 , timeoutPromise])
}

const promiseA = new Promise((resolve) => setTimeout(() => resolve("A") ,1000))
const promiseB = new Promise((resolve)=>{
    setTimeout(() => {
        resolve("B")
    },1000);
})

timeoutRace(promiseA, promiseB, 2000)
    .then((result) => console.log("Winner:", result))
    .catch((error) => console.log("Error:", error.message));