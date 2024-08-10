// // Call Method invokes a function with a given this value and the arguemnts provided one by one
// var emp1 = {firstName : "Harsh" , lastName: "Raj"};

// function invite(greeting1 , greeting2){
//     console.log(greeting1 + " " + this.firstName + this.lastName + greeting2);
// }

// invite.call(emp1 , "Hello World" , "How are you ");
// invite.apply(emp1 , ["hello world" , "how are you"]);

// // Apply Invokes the Functiob with Given this value and allows you to pass in the 
// // arguments as an array 

// // Call and Apply are Preety much similar in working as in the 
// // Call we just use the concept of this keyword and paramters are just being directly passed 
// // Apply is preety miuch similar to the concept of Call but we just pass the arguemnets in this as the 
// // Array 


// // ////////////////////////////////////////////
// // Bind Creates a new function that will have the this keyword set to the first parameter 
// // // passed to the bind () 

// var invite1 = invite.bind(emp1);
// invite1("Hello World" , "How are you");

// let jsonString = `{"name" : "harsh" , "age" : "34"}`;
// let parsedObject = JSON.parse(jsonString);
// console.log(parsedObject.name)


// // Array Slice Method 
// let arrayIntegers = [1,2,3,4,5];
// let arr1 = arrayIntegers.slice(0,2);
// console.log(arr1)

// // The Main Point in the Array Slice is that When we get the 
// Startign elment and we dont consider the last elelmt 

// Array Splice Method is used to add or remove some sort of the elements 
// let arr = [1,2,3,4,5,6];
// let a1 = arr.splice(3);
// console.log(a1);

const arrowFunc1 = (a,b) => a + b ;
const arrowFunction2 = a => a*10;
const arrowFunc3 = () => {} // No Parameters

console.log(arrowFunc1);
console.log(arrowFunction2);
console.log(arrowFunc3);

// const firstOrder = () =>{
//     console.log("Hello I am The First Order Funcrtion");
//     const higher  = (fn) => fn();
//     higher(firstOrder)
    
// };
// firstOrder();

// Currying is a technique in programming where  the function with Multiple arguments 
// is transformed into a series of function that each take a single argument 
// This allow you to call the Function one argument at a time 


const curryAdd = (a) => (b) => (c) => a  + b + c ;
// using The Curried Function 
const add5 = curryAdd(5);
const add5And3 = add5(3);
const result = add5And3(2);

console.log(result)

