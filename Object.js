// let vehicle = {
//     wheels: '4',
//     fuelType : 'Gasoline',
//     color : 'Green'
// }

// let carProps = {
//     type : {
//         value : 'Volkswagen',
        
//     },
//     model: {
//         value : 'Golf'
//     }
// }

// // var car = Object.create(vehicle , carProps);
// // console.log(car);
// // // This is the Creation of  Object whihc has the property from the same prototype 

// // // What is the concept of Protyping Chain -- - 
// // // It is used to build new typed of objects based on the exisiting ones . It is similar to the concept of inheritance 
// // // in the class based language . When the create you an object using an constructor function the created object inherits properties from a prototype object 

// // // The Prototype on Object instance is available through the 
// // // Object.getPrototypeOf(object) or _proto_ property whereas prototype on the constrcutor function is available thrugh the Object.prototype 

// // // What are the differences between the Call , Apply and Bind 
// // // Call - The Call method invokes a function with a given this value and argument provide one by one 

// // var emp1 = {firstName : "Harsh" , lastName : "Raj"};
// // var emp2 = {firstName : "Ayush" , lastName : "Kumar"};

// // function invite(greeting1  , greeting2)
// // {
// //     console.log(
// //         greeting1 + " " + this.firstName + " " + this.lastName + " ," + greeting2
// //     );

// // }

// // invite.call(emp1, "Hello" , "How are You" );
// // invite.call(emp2 , "Hello" , "How are you" );

// // // The Call Method invokes a Function with a Given this value 
// // // and the arguments provided one by one 

// // // Apply Method - Invokes the function with the given this value 
// // // and allows you to pass in the argument as an array 

// // var em1 = {firstName : "Siddhi" , lastName : "Sinha"};
// // var em2 = {firstName: "Riddhi" , lastName : "Sinha"};

// // // Now we are using the concept of  Apply as this uses the concept of Array 
// // function Harsh(greeting1 , greeting2){
// //     console.log(greeting1 + " "  + this.firstName + " " + this.lastName + greeting2);
// // }

// // Harsh.apply(em1 , ["Hello" , "how are you Doing ?"]);
// // Harsh.apply(em2 , ["Hello" , "how are you doing the last statement"])

// // Binds Return a New Function allowing you to pass any number of arguments 

// var h1 = { firstName : "Ayush" , lastName : "Raj"};
// var h2 = {firstName : "Riddhi" , lastName : "Sinha"};

// function invite(greeting1 , greeting2){
//     console.log(
//         greeting1 + " " + this.firstName + " " + this.lastName + ","
//     );
// }

// var invite1 = invite.bind(h1);

// invite1("Hello", "How are you?")

// // Basically Call is used to pass the any number of arguments and the Apply uses this as the Array 
// // Bind creates a New Function that will have this set to the first parameter as the Object Creation and then the 
// Apply is used witht the Number of Arguments as an array 
// Call this is basically used with any number of arguments 

// The Slice method returns the selected elements in an array 
// as a new array object . It selects the element from the starting and ends at a given optional end arguments without including the last elemet 

// let arrayIntegers = [1,2,3,4,5,6];
// let arrayIntegers1 = arrayIntegers.slice(-3,-1);
// console.log(arrayIntegers1);
// console.log("This is getting executed")

// // The Slice method returns the seleted elements in an Array as the new Array object 

// // What is the Purpose of the Array Splice Method 
// // The Splice method adds/remove items to from an array and then returs the 
// // removed item . The First argument specifies the arrays insertion or the deletion whereas the 
// // second element indicate the number of elements to be deleted 

// let contactList = {
//     "ALice" : "123456",
//     "Bib" : "123456"
// };

// // Adding a New Contact 
// contactList["Harsh"] = "12345678";

// // Retireve the Conatact List 
// console.log(contactList["Harsh"]);

// In JavScript function are  the first class objects . This means when the function in that language are treated like any other variable 
// These function can be passed as an argument as argument to other function 

// const hasrh = () => {
//     console.log("My Name is Harsh")
// };
// const higherOrder= (ReturnFirstOrderFunc) => ReturnFirstOrderFunc() ; 
// higherOrder(hasrh)

// const multiArg = (a, b, c ) => a + b + c ;
// console.log(multiArg(1,2,300));

// const curryUnary = (a) => (b) => (c) => a + b + c ; 

// console.log(curryUnary(2));
// console.log(curryUnary(1)(2));
// console.log(curryUnary(1)(2)(3));

// What are the Pure Functions - They return the same value is only determined by its arguments without any sort of sideefefects 
// If you call the a function with same arguments N times then answer wold be same 

// The let statement declares a block scope local variable . Hence the variable defiend with the let keyword are limited to the block scope 
// wheeras the var keyword used to defined the variable globally 

// Variable declared with the Var are just hoisted  and intialized as undefiend 
// Whereas the let keyword is Hoisted but not Initilialzed 

// with Var it is possible to re-declare the variable in same scope whereas the let keyword it is not possible to re-declare the variable 

// const harsh = (username) => {
//     if(username) {
//         console.log(salary);
//         // console.log(age);
//         let age = 30 ;
//         var salary = 10000; 
//     }

//     console.log(salary);
//     // console.log(age);

// }
// harsh("Harsh")

// Temporal Dead Zone is the specific period or area of  a Block where a varaible is inaccessible until it has been 
// Intialized with the value . This behavior in Javascrrpt that occurs when declaring a variable with the let ans the const keyword but not with the var .

// (function() {
//     var message = "Hars";
//     console.log(message);
// }) () ;
// console.log(message)

// Memoizationn is the functional programming Technique which attemors to 
// Increase a function performance by caching its previously computed wuth the result . 
// Each Time a Mempized function is caleed its parameters are used to index the Cache 

// const memoi = () =>{
//     let cache = {};
//     return (value) => {
//         if(value in cache) {
//             console.log("This is the Vle from Cache");
//             return cache[value]
//         }
//         else {
//             console.log("Calculating the Result");
//             let result = value + 20 ;
//             cache[value] = result;
//             return result ; 
//         }
//     }
// }

// const addition = memoi() ; 
// console.log(addition(20)); //output: 40 calculated
// console.log(addition(20)); //output: 40 cached

// The Conceot of Hoisting is that  variables  , function declaration and the classes are moves to the top of their scope before the execution of the code .
// Javascript Only Hoists declaration not the Intialization 

// A Closure in Javascript is a powerful feature where a function is bundled together with its surrounding 
// State . in Simple Terms a Closure allow a function to access variable from its outer function even after that outer function has comoleted the executing 

// function Welcome(name) {
//     var greetingInfo = function (message) {
//         console.log(message + "         " + name);
//     };
//     return greetingInfo ; 
// }

// var myFunction = Welcome("Harsh");
// myFunction("Welcome My Dear");
// myFunction("Welcome My Dear smjdbfgiawun");

// Modules refer to samll unit of Independent reusable code and also act as the foundation for many Javascript Design Patterns 

// IndexDB is low level API for client-side storage of larger amoount of structured data including the files as well as the blobs 
// This is basically used for the high performance of the data 

// WebStorage is an API tht provides a mechanosm by which browser can store key/value pair locally within the user browser . There are 
// basically 2 Mechanism for the stroing the data in the client 
// Local Storage - It Stores the data for the current origin with not Expiration Date 
// Session Storage = It Stores the data for one of the session and then the dataa is being lost when the browser tab is closed 

// Basically Cookie is a piece of data that is stored on your computer to be accessed by the browser . Cookies are saved in key/Value pair .
// Cookie are basically used for remembering the Data that is stored in the profile 
// When the user visits a web page then the uer profile can be stored in a Cookie 
// Next Time the user visit the oage the cookie remebers the user profile 

// Web Storage is more accuare and large amount of data can be stored locally without affecting the 
// website performance . Also the information is never being transferred to the server 

// What is the Concept of Promise 
// A Promise is an Object that may produce a signle value sime time in future with either a resolved value . It can have 3 possible states 
// Fulfilled , rejected or being the pendding 

// const promise = new Promise(
//     (resolve) => {
//         setTimeout(() => {
//             resolve("I am Being resolved")
//         },5000);
//     },
//     (reject) => {} 
// );

// promise.then((value) => console.log(value))

// const harsh = new Promise(
//     (resolve) =>{
//         setTimeout(()=>{
//             resolve("I am Being  a Promise")
//         },5000)
//     },
//     (reject) => {}
// );

// harsh.then((value) => console.log(value))

// Promises are used for the Handling the asynchrnous operation . They Provide an Alternative 
// approach for the callback by reduncing the callbacks and also reducing the chances of the 
// Callback hell and writing the Cleaner Code 

// Callbacka are the Function that are passsed in to another function The Function is just invoekd as the outehr fnction complete the xecution 

// function callbackFunction(name) {
//     console.log("Hello "  + name);
// }

// function outerFunction(callbackFunction) {
//     let name = prompt("Please enter your name.");
//     callbackFunction(name)
// }

// outerFunction(callbackFunction)

// The Callback are needed because of the javascript is an event driven language . That 
// menas instead of waiting for the response of the javaScript will keep executing while listening for others events . 
// This could be an example for the case in which we take a API for the data Fetching and the response gets generated when we  gets the promise execurted 

// Callback hell is basically a oattern for the muiltiple nested callbacks which makes the code hard toread and debug when dealing witht the asyncghrinous code 

// A Promise is an Object that supplies a Stndard-comppliant ,then Methodn 
// You can nest the Callback inside each other so there are multiple execution which  can be dome 

// const harsh = new Promise(
//     (resolve) =>  {
//         setTimeout(()=>{
//             resolve(1)
//         },1000)
//     }
// );

// harsh.then((value) => {return value *  2} )
// .then((value) => { console.log(value)})

// Priomise.all is a Promise that takes an array of Promise that takes as array as an input 
// and it gets resolved when all the promise get resolved and if any of the promise gets rejected all the promise 
// are then reject 


//  Promise.all([Promise1 , Promise2 , Promise3])
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => console.log(`Error in Executiing in this code as there is some sort of error ${error}`))

// Promise.race() method will return the promise instance of the object which is firstly resolved or rejecetd . 

var promise1 = new Promise(function(resolve , reject){
    setTimeout(resolve , 500 , "one")
});

var promise2 = new Promise(function (resolve , reject){
    setTimeout(resolve , 100 , "two")
    console.log("This is getting execuetd ")
});

Promise.race([promise1 , promise2]).then(function(value){
    console.log(value)
})