// What is Prototype Chain in Javascript 

// The Prototype chain is a mechanism that allows objects to inherit properties
// and the methods from other objects . This concept is similar to 
// inheritance 


function Grandparent(){
    this.cook = function() {
        return "I can Cook Chicken"
    };
}

function Parent() {
    this.drive = function(){
        return "I can also Drvie";
    };
}
Parent.prototype = new Grandparent();

function You(){
    this.play = function() {
        return "I can Play the gane of guitar";
    };
}
You.prototype = new Parent();

let me = new You();
console.log(me.play());
console.log(me.cook());
console.log(me.drive());

// Constructor Functiona were the Tradiotional way to create objects and establish the concept of Inheritance in Javascript 