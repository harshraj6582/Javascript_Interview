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

function Welcome(name) {
    var greetingInfo = function (message) {
        console.log(message + "         " + name);
    };
    return greetingInfo ; 
}

var myFunction = Welcome("Harsh");
myFunction("Welcome My Dear");
myFunction("Welcome My Dear smjdbfgiawun");