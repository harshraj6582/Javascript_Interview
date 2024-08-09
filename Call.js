// Call Method invokes a function with a given this value and the arguemnts provided one by one
var emp1 = {firstName : "Harsh" , lastName: "Raj"};

function invite(greeting1 , greeting2){
    console.log(greeting1 + " " + this.firstName + this.lastName + greeting2);
}

invite.call(emp1 , "Hello World" , "How are you ");
invite.apply(emp1 , ["hello world" , "how are you"]);

// Apply Invokes the Functiob with Given this value and allows you to pass in the 
// arguments as an array 

// Call and Apply are Preety much similar in working as in the 
// Call we just use the concept of this keyword and paramters are just being directly passed 
// Apply is preety miuch similar to the concept of Call but we just pass the arguemnets in this as the 
// Array 


// ////////////////////////////////////////////
// Bind Creates a new function that will have the this keyword set to the first parameter 
// // passed to the bind () 

var invite1 = invite.bind(emp1);
invite1("Hello World" , "How are you");
