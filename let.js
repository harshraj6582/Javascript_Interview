// // // let counter = 30 ;
// // // if(counter === 30 ){
// // //     let counter = 31 ; 
// // //     console.log(counter);
// // // }
// // // console.log(counter);
// // // // 30 Because the variable in if block won't exist here 


// // function userDetails(username){
// //     if(username) {
// //         console.log(salary);
// // // Undefined Due to hoisiting of the Var data Type 
// //         console.log(age);
// //         // Refernce Error Cannot access the age before the intializtion of the let 
// //         let age = 31 ;3
// //         var salary = 10000 ;
// //     }

// //     console.log(salary);
// //     // This is being accessible due to the function scope of the var 

// //     console.log(age);
// //     // Age is being not defined because of the Block Scope of 
// // }
// // userDetails("Harsh")

// // Temporal Dead Zone 
// // It is being a Specific Period or area of a block where a variable is inaccessbile until it has been 
// // Intialized with a Value . This behaviour in Javascript that occurs when declaring a 
// // a variable with let and const keywords but not with the var . 
// In ECMA Sxript 6 Accessing a let or const variable before its declarartion causes a Reference Error 

// function somemethod() {
//     console.log(counter1);
//     // This is basically Undefiend 
//     console.log(counter2);
//     // This would have the result of the refernce error 
//     // This is beacuse they are basically hoisted but not being 
//     // Intialize this causes the Refernce Error 
//     var counter1 = 1 ;
//     let counter2 = 2 ; 
// }
// somemethod();

// Intemediate Invoked function are basically the function which are called instant after the declaration of the function 
// They are basically used to provide Data Privacy in the Code 
// As the variable Present inside the function is not being accessible outside the function 

// (function () {
//     // Logic Here 
// })();
let uri = "employeeDetails?name=john&occupation=manager";
let encoded_uri = encodeURI(uri);
let decoded_uri = decodeURI(encoded_uri);
console.log(encoded_uri);
console.log(decoded_uri)