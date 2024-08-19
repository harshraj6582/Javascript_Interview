////// The Differnce betweent the var , let and const 

// Working with the Var Declaration 
// The Scope of var keyword declares a variable that is Function Scoped 
// This means the variable is accessible anywhere within the function 

// Hoisting - When  you decalre a variable with the var Javascript Hoists or lifts the variable 
// declaration at the top of the its scope . 
// Because of this you can redclare the same var variable multiple times with out getting an error 


// Practical Example of this 
// var name = "Harsh";
// function myFunc() {
//     var name = "Raj";
//     var name = "Ayush";
//     console.log(name);
// }
// myFunc();
// console.log(name);
// As this is being the Global Scope so the Vaue is being Harsh 
// Apart from the Function the variable is redeclared twice so the 
// Output is AYush  and the Hoisiting features allow for the multiple time redeclaration of the variable 

// Let and const Declaration 
// Both the let and Const are just blocked-scoped meaning they are only accessible 
// within the block where they are declared 

// There is no chance of declaration 
// Unlike var you cannot redeclare a variable within the same scope 

// let name = "Harsh";

// function myFunc() {
//     let name = "Ayush";
//     let name  = "Raj";
// }

// In JAvascript when you devclare a variabloe with the const it means that it cannot be reassinged to a differnet value 
// Value can be mutable 

// const myNumber = 10;
// myNumber = 20 ;
// This would show me the error as the assignemet to the constant variable 

// // Mutable vs Immutable Values : 
// 1-> Immutable Values are the values which cannot be chnages . 

// If the Const with the Object and the Arrays 
// const myArray = [1,2,3,4,5];
// myArray.push(4);
// // This is allowed as the Array Becomes [1,2,3,4]
// myArray = [5,6,4,7];
// // Error : Assignemt to a Constant Variable 

// What are Raw Strings in Javascript 
// ES6 Provides a raw String Feature using the String.raw() method which is used to the raw string form of the template Strings .

// var calculationString = String.raw`The sum of numbers is \n${
//     1 + 2 + 3 + 4
//   }!`;
//   console.log(calculationString); // The sum of numbers is \n10!

// What is Destructuring Assigmet 
// Its is a Javascriot Expression that makes ot possible to unpack the values from the array from the objects 
// inti distinct Variable .

// var [one , two , three] = ["JAN" , "FEB","MARCH"];

// console.log(one);
// console.log(two);
// console.log(three);

// var x , y , z ; 
// [x = 2 , y = 4 , z = 6] = [10];

// console.log(x);
// console.log(y);
// console.log(z);

// Swap the Variables in Destructing the Assingment 
// var x = 10 , y = 20 ;

// [x,y] = [y,x];
// console.log(x);
// console.log(y);

// Module loaders helps you to manage your code more efficentlty by the laoding of the 
// necessay parts only when they are needed 

// Collation is used for sorting the set of strings and searching within the set of strings . 
// It is parametrized by the Locale and aware of Unicode 

// The Use of for of Loop 
// let array = [10,20,30,40];

// for(let valeu of array) {
//     valeu++;
//     console.log(valeu);
// }

// [..."Harsh Raj"];
// Explanation it is the string is an iterable type and the spread operator within the array maps 
// every character of an iterable to one of the element . 
// Hence each of the Character of a String becomes an element within an Array 

// Whais paradigm in Javascript 
// It is a Multi-paradigm language , supportive imperative and procedural 
// Object oriented and Funcrional Programming language 

// let ans = String.fromCharCode(65, 66, 67);
// console.log(ans);

// The Output of the Above Expression is "W" . The bracket noatation with the specific index on a String returns the character at a Specific Location 

// What is the Purpose of Error Object 
// These are just the constructors creates an error object and the instance of the error objects are thrown when there is runtime error occur

// No All the Objects have prototypes except the base object ot an object that has been created with 
// Object.create(null)
// The Base Object is Object.prototype and its prototype is null


// Parameter are the variable name you define in the function to use later 
// Arguments : These are the actual values you pass to the function when calling it 

// The Some() method is used to test whether at least one element in the array passes  the test implemented by the provider function 

// var array = [1,2,3,4,5,6,7];

// var odd = (element) => element % 2 !== 0 ;

// console.log(array.some(odd));

// How to Combine two Arrays 
// var veggies = ["Tomato", "Carrot", "Cabbage"];
// var fruits = ["Apple", "Orange", "Pears"];
// var veggiesAndFruits = veggies.concat(fruits);
// console.log(veggiesAndFruits); // Tomato, Carrot, Cabbage, Apple, Orange, Pears

// What is the Differnce Between Shallow and Deep Copy 
// Shallow Copy - A New Object is created that has the exact copy of the vales in the original objects . If any of the fields of the Objects are the 
// references to the other objects 

// var empDetails = {
//     name : "Harsh",
//     age : "25",
//     expertise : "Software Developer"
// };

// var empDetailsShallow = empDetails;
// empDetailsShallow.name = "Johnson";
// console.log(empDetails)

// In Shallow Copy ther is only copy of the addresses of the variable and there is not any kind of independent source of data 
// While in Deep Copy there is different copy and changes in one of the object doesnot effect the other one 

console.log(+"Hello");
// The Output of this console.log is NaN because at the starting of the is a Unary Operator it would try to convert this into a number type and this conversion fails 