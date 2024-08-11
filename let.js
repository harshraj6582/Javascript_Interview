// // // // // // let counter = 30 ;
// // // // // // if(counter === 30 ){
// // // // // //     let counter = 31 ; 
// // // // // //     console.log(counter);
// // // // // // }
// // // // // // console.log(counter);
// // // // // // // 30 Because the variable in if block won't exist here 


// // // // // function userDetails(username){
// // // // //     if(username) {
// // // // //         console.log(salary);
// // // // // // Undefined Due to hoisiting of the Var data Type 
// // // // //         console.log(age);
// // // // //         // Refernce Error Cannot access the age before the intializtion of the let 
// // // // //         let age = 31 ;3
// // // // //         var salary = 10000 ;
// // // // //     }

// // // // //     console.log(salary);
// // // // //     // This is being accessible due to the function scope of the var 

// // // // //     console.log(age);
// // // // //     // Age is being not defined because of the Block Scope of 
// // // // // }
// // // // // userDetails("Harsh")

// // // // // Temporal Dead Zone 
// // // // // It is being a Specific Period or area of a block where a variable is inaccessbile until it has been 
// // // // // Intialized with a Value . This behaviour in Javascript that occurs when declaring a 
// // // // // a variable with let and const keywords but not with the var . 
// // // // In ECMA Sxript 6 Accessing a let or const variable before its declarartion causes a Reference Error 

// // // // function somemethod() {
// // // //     console.log(counter1);
// // // //     // This is basically Undefiend 
// // // //     console.log(counter2);
// // // //     // This would have the result of the refernce error 
// // // //     // This is beacuse they are basically hoisted but not being 
// // // //     // Intialize this causes the Refernce Error 
// // // //     var counter1 = 1 ;
// // // //     let counter2 = 2 ; 
// // // // }
// // // // somemethod();

// // // // Intemediate Invoked function are basically the function which are called instant after the declaration of the function 
// // // // They are basically used to provide Data Privacy in the Code 
// // // // As the variable Present inside the function is not being accessible outside the function 

// // // // (function () {
// // // //     // Logic Here 
// // // // })();
// // // // let uri = "employeeDetails?name=john&occupation=manager";
// // // // let encoded_uri = encodeURI(uri);
// // // // let decoded_uri = decodeURI(encoded_uri);
// // // // console.log(encoded_uri);
// // // // console.log(decoded_uri)

// // // // memoization is the functional programming technique which attempts to increase a function performace by caching its previously computed results . Each time 
// // // // a Memoized function is called its parameter are used to index the cachr 
// // // // If the data is being present then it can be returned without executing the Entire Function 

// // // const memoizAddition = () => 
// // // {
// // //     let cache = {};
// // //     return (value) =>
// // //     {
// // //         if(value in cache)
// // //             {
// // //             console.log("Fetching the Data fromt the Caceh");
// // //                 return cache[value];
// // //             }
// // //             else{
// // //             console.log("Calculating the Result");
// // //             let result  = value + 20;
// // //             cache[value] = result ; 
// // //             return result ; 
// // //                 }
// // //     }

// // //  }

// // // What is Hoisiting 

// // // Hoisting is a JavaScript mechanism where the Variables 
// // // where the Variavle function declarations and classes are moved to the top of the 
// // // their Scope before the Execution . 
// // // Most IMP is that Javascript Only Hoists the Declaration , not the 
// // // Intializations 
// // //  var message ; 
// // // console.log(message);
// // //  message = "This Variable is beiung Hoisted at the tof the Programming but htis nis not bering intialzw";

// // // In the Same Way the Function Declarationa are beingg Hoisted to 
// // message("Harsh Raj is my Name");

// // function message(name){
// //     console.log(name);
// // }

// // // The Hoisting makes the Fucntion to be safely used in the code before they are declared 

// // This is being using th e ES6 Class can be Defiend as an Alternative 
// class Bike {
//     constructor(color ,  model){
//         this.color = color ; 
//         this.model = model ; 
//     }

//     // Get Details of the Followign 
//     getDetails(){
//         return this.model + "Bike has " + this.color + "Color";
//     }
// }

// var bmw  = new Bike("red" , "B<W");
// console.log(bmw.getDetails());


// What are the Concept of Closures 

// A Closure in Javascript is like a Special Bix that Function carried out with it . 
// This box contains all the Variables and the Data from the place(scope) whrer the Function is beinng Createwd . The Key Point is that even if the outer fucntion where the 
// Biox is beibg created has completed the execution of the code 
// It has the Values 
// Points of Working of the Code are - 
// 1-> Its Own variables 
// 2-> The Variables of the Outer Fucntion 
// 3-> Global VariABLES 

// iN SIMPLE WORDS 
 // A closure is like a memmort that a function with it . It remrbers 
 // the envirnonemtn where it  jas been create d

function Welcome(name) {
    var greetingInfo = function (message) {
        console.log(message + name)
    };
    return greetingInfo;
}

var myFunction = Welcome("John");
myFunction("Welcome to ");
myFunction("JHelqkindfolawjef");


