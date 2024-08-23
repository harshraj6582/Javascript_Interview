// An Object Literal is a way to define and create an Object 
// uisng a simpple and concise syntax 

// AN Object literal is created by placing a Comma Seperated list of key-value paird
// inside the curly braces {} . Each ley-value pair is called 
// a Property . 

// const person = {
//     firstName: 'Harsh',
//     lastName: 'Raj',
//     age:30,
//     greet:function() {
//         console.log('Hello' + this.firstName + '' + this.lastName)
//     }
// };

// person.greet();
// Object literal provide a simple and readable way to create objects with 
// properties and methods 

// const human = {
//     name : {
//         first : 'Harsh',
//         last
//     }
// }

// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     harsh: {
//         first : 'Hatrsh',
//         last : 'Ayush'
//     },
//     year: 2021,
//     drive: function() {
//         console.log(`Driving a ${this.year} ${this.make}`)
//         console.log(`${this.harsh.first}`)
//     }
// };

// console.log(car.make);
// car.drive();



// let vehicle = {
//     wheels: '4',
//     fuelType: 'Gasoline',
//     color: 'Green'
//   }
//   let carProps = {
//     type: {
//       value: 'Volkswagen'
//     },
//     model: {
//       value: 'Golf'
//     }
//   }
  
//   var car = Object.create(vehicle, carProps);
//   console.log(car.fuelType);

// let vehicle = {
//     wheels : '4',
//     fuelType : 'Gasoline',
//     color: 'Green'
// }

// let carProps = {
//     type : {
//         value : 'Volkswagen'
//     },
//     model: {
//         value : 'Golf'
//     }
// }

// var car = Object.create(vehicle , carProps);
// console.log(car)

// Function Constructor 
// Create any function and apply the new operattor to crate object instances 

// function Person(name) {
//     this.name = name ; 
//     this.age = 21 ; 
// }

// var object = new Person("Harsh");

// console.log(object.name)

// ES6 Introduced a Class Feature to Create Objects 

// class Person {
//     constructor(name) {
//         this.name = name ; 
        
//     }
// }

// var object = new Person("Harsh")
// console.log(object.name)

// Prototype Chain
// It is used to build new Types of Objects based on the existing ones
// It is similar to the concept of inheritnace in a class based language 

// The prototype Chain - This is a mechanism that Javascript used to look up for the protypes and method using the objects 
// Inheritance - The Practice of one of the object or class receiving properties and method from another enabled by the prootype chain 

// Call() : The Call Method method invokes a function with given this value and the arguments provided by one 

// var emp1 = {firstName : "Harsh" , lastName : "Raj"};4

// function invite(greeting1 , greeting2){
//     console.log(
//         greeting1 + " " + this.firstName + " " + this.lastName + greeting2
//     );
// }

// invite.call(emp1 , "Hello" , "How are you ")

// Basically Call is called when the object is passed and check if the this keyword

// var emp1 = {firstName : "Harsh" , lastName : "Raj"};

// function invite(greeting1 , greeting2){
//     console.log(greeting1 + this.firstName + " " + this.lastName , greeting2);
// }

// invite.apply(emp1 , ["Hello" , "How are you ? "])

// Bind : Return a New Function allowing you to pass any number of arguments 

// var emp1 = {firstName : "Harsh" , lastName : "Rodson"};

var emp1 = {firstName : "Harsh" , lastName : "Raj"};
var emp2 = {firstName : "Ayush" , lastName : "Baily"};

function invite(greeting1 , greeting2) {
    console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + greeting2
    )
}

var inviteEmployee1 = invite.bind(emp1);
inviteEmployee1("Hello" , "How are You");