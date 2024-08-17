// What are Closures 
// A closure is like a special memory that a function carries with it . 
// Its is a combination of a functiona and the environement in which it was created .
// This memory includes the function own variables and the variable from the fiunction 
// that are created it and even the global variables 

function createGreeting(name) {
    function greet(message) {
        console.log(`${message} , ${name}`);
    }
    return greet ; 
}
const sayHello = createGreeting("Harsh");
sayHello("hello");
sayHello("Good Morning ");

// A Closure are not just the abstract concept they are pratically useful in the private variables and state between the function call and even the generate the function dynamically .
// Closure use the concept of the memoization 
// This would lead to much more efficient code .


// Memory Rentention - Closure allow a fucntion to remeber the environment 
// Practical Use - They are much more essential in the maintaining the extra state 
// creating the private and optimizing the performance 


// Modules - 
// Modules are likely the neatly organized boxes that contian the specific peices of the code .
// These Boxes can hold anything from the function and the variables to the entire class 
// They help your code to be clean and organized and resulable 

// Key Feature of the Moduels are - 
// Orhganization 
// Resualvility 
// Encapsulation 