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