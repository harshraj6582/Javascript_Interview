// Object Creation in JavaScript 
var object = {
    name: "Harsh",
    age: 34,
    address: {
        city: "Patna",
        zip : 800025,
    },
    fullName : function() {
        return this.name + "Age of the Person is " + this.age
    }
};
console.log(object.fullName())
console.log(object.address.city)
// using the Concept of Constructor in javascript 

function Car(brand,model) {
    this.brand = brand ;
    this.model = model
}

let myCar = new Car("Harsh" , "Swift");
console.log(myCar.brand);
console.log("This is being executed")


// Using the Concept of ES6 Class Syntax 
class Person {
    constructor(name){
        this.name = name ;
    }
}
var object = new Person("Hatsh ")
console.log(object.name)