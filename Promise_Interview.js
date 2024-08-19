// // // // A Promise is an Object representing the eventual Comnpletion or failure od an 
// // // // an synchronous operation . It is a way to handle the 
// // // //asynchronous operation in Javascript 

// // // // States of Promise 
// // // // 1-> Pending 
// // // // 2-> Fulfilled 
// // // // 3-> Rejected 


// // // let promise = new Promise((resolve , reject) =>{
// // //     // Asynchronous Operation 
// // //     let success = true ;
// // //     if(success){
// // //         resolve("Operation was Successful");
// // //     }
// // //     else {
// // //         reject("Operation is being failed");
// // //     }
// // // });

// // // promise
// // //     .then(result => {
// // //        return result + " and more";

// // //     })
// // //     .then(newResult =>{
// // //         console.log(newResult);
// // //     })
// // //     .catch(error =>{
// // //         console.log(error);
// // //     })
// // //     .finally(() =>{
// // //         console.log("Operation is Complete")
// // //     })

// // // let promise1 = Promise.resolve("First");
// // // let promise2 = Promise.resolve("Second");


// // // Promise.all([promise1, promise2])
// // //     .then(results => {
// // //         console.log(results);
// // //     })
// // //     .catch(error =>{
// // //         console.log(error);
// // //     })

// // // Race Condition is occured when the resolves or rejects 
// // // as soon as one of the promise in the array resolves or objects 

// // // let promise1 = new Promise((resolve,reject) => setTimeout(resolve , 500 , "First"));
// // // let promise2 = new Promise((resolve,reject) => setTimeout(resolve , 100 , "Second"));

// // // Promise.race([promise1 , promise2])
// // //     .then(result => {
// // //         console.log(result);
// // //     });

// // // let promise1 = new Promise((resolve , reject) => {
// // //     setTimeout(() => {
// // //         resolve("Operation Being Sucessfull after 2 Seconds");
// // //     },2000);
// // // });

// // // promise1.then(message => {
// // //     console.log(message);
// // // })

// // let promise = new Promise((resolve , reject) =>{
// //     setTimeout(() => {
// //         resolve("Operation is being Successfull after 2 Seconds");
// //     },2000)
// // });

// // promise.then(message => {
// //     console.log(message);
// // })

// // setTimeout(() => {
// //     console.log("Delayed for 1 Second")
// // }, 1000);

// // setTimeout(() => {
// //     console.log("This is being the first message")
// // },5000);
// // setTimeout(() => {
// //     console.log("This is just being the Second message");
// // },3000);

// // setTimeout(() => {
// //     console.log("This is the Third Message");
// // },1000);

// // const myArray = ["zero" , "one" , "two"];
// // myArray.myMethod = function (sProperty) {
// //     console.log(arguments.length > 0 ? this[sProperty] : this);
// // };

// // myArray.myMethod();
// // myArray.myMethod(1);

// // const myArray = ["zero" , "one" , "two"];
// // const myBound = function (sProperty) {
// //     console.log(arguments.length > 0 ? this[sProperty] : this);
// // }.bind(myArray);

// // myBound(); // Prints "zero One Two " because this is Bound to my ARray in the function 
// // myBound(1); // Prints the Valye of "one";
// // setTimeout(myBound , 1.0*1000);
// // // Still Prints the Value of Zero One Two after 1 Seconds because of Binding 
// // setTimeout(myBound , 1.5*1000 , "1");

// // What are Being the Arrow Functions 
// // Arrow Function are a Shorter way to write functions in javascript 
// // They are used especially when you need to write the simple 
// // functions quickly 

// function example() {

//     return "Hello World This is a Normal Function "
// }

// const example1 = () => "Hello World this is from the Arrow Function";

// Simple Delay Execution with the Arrow Function 

// const delay = (ms) => new Promise((resolve) =>{
//     setTimeout(() =>{
//         resolve(`Resolved this after ${ms} milli seocnds`)
//     })
// });

// delay(1000).then((message) => console.log(message));

// const delay = (ms) => new Promise((resolve) =>{
//     setTimeout(() => resolve(`Resolved after${ms} milliseconds`))
// });

// delay(1000)
//     .then((msg) => {
//         console.log(msg);
//         return delay(2000);
//     })
//     .then((msg) => {
//         console.log(msg);
//         return delay(3000);
//     })
//     .then((msg) => console.log(msg));

// const timeoutPromise = (ms) => new Promise((_, reject) => {
//     setTimeout(() => reject(new Error(`Rejected This after ${ms}`)),ms)
// });
// timeoutPromise(2000).catch((error) => console.log(error.message));

// const delay = (ms) => new Promise((resolve) => {
//     setTimeout(() => resolve(`Resolved after ${ms} Milliseconds`))
// });

// const runAll = () => {
//     const promises = [delay(1000) , delay(2000) , delay(3000)];
//     Promise.all(promises).then((res))
// }

// Async / await is a modern way to handle  the asynchronous code in 
// in Javascript making it easier to read and write . It is built on the top of 
// Promises and allow you to work with asyncgronpus operations 

// async keyword is placed before a function to make it return a Promise 

// async function fetchData() {
//     return "Data fetched";
// }

// fetchData().then((result) => console.log(result));

// Await keyword can be only used inside an async function async function . It pauses the execution 
// of the function until the Promise is resolved or rejected .

// async function fetchData() {
//     let result = await new Promise((resolve) =>{
//         setTimeout(() => resolve("Data Fetched"),2000)
//     });

//     console.log(result);
// }

// fetchData();

// async function fetchData() {
//     try {
//         let result = await new Promise((_,reject) =>{
//             setTimeout(() => reject(new Error("Failed to fetch Data")))
//         });
//     }
//     catch(error) {
//         console.error(error.message);
//     }
// }

// fetchData();

// async function fetchData() {
//     let result = await new Promise((resolve) => {
//         setTimeout(() => resolve("Data fetched!"), 1000);
//     });
//     console.log(result);
// }

// fetchData();

// async function fetchData() {
//     let result = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await result.json();
//     console.log(data);
// }
// fetchData()

// async function fetchData() {
//     try {
//         let result = await fetch("https://jsonplaceholder.typicode.com/posts");
//         let data = await result.json();
//         console.log(data);
//     }
//     catch(error){
//         console.error("An Error Occured" , error)
//     }
// }

// fetchData();

// async function task1() {
//     return new Promise((resolve) => setTimeout(() => resolve("Task 1 is just being compleetd"),2000));
// }

// async function task2() {
//     return new Promise ((resolve) => setTimeout(() => resolve("Task 2 is being Completed"),1000));
// }

// async function runTasks(){
//     const[result1 , result2] = await Promise.all([task1(), task2]);
//     console.log(result1 , result2)
// }

// runTasks();

// async function processOrders(orderIds) {
//     for (let id of orderIds) {
//         try {
//             const order = await fetch(`https://api.example.com/order/${id}`);
//             const orderData = await order.json();
//             console.log(`Order ${id}:`, orderData);
//         } catch (error) {
//             console.error(`Failed to process order ${id}:`, error);
//         }
//     }
// }

// processOrders([101, 102, 103]);


// // The Object.is() method determined whether two values are the same values or not . 
// console.log(Object.is("hello", "hello")); // True 

// Object.is([], []); // false 

// Some of the Application of Object IS method are follows 
// 1-> it is used for the comparison of two strings 
// 2-> It is used for the compariosn of two numbers 
// 3-> It is used for the comparing the Polarity of Two Number 
// 4-> It is used for the compariosn of two objects 


// Object.assign() is a method which is used to copy the values and the 
// // the values and the properties from one or more than one source to a target object 
// // It returns the target object which has the properties and the values of from the source objects .

// Object.assign(target , ...sources);


// const target = {a: 1 , b: 2};
// const source = {b : 3 , c: 4};

// const returnedtarget = Object.assign(target , source);

// console.log(target);

// console.log(returnedtarget);

// // The Applications of the Assign Method are 
// 1-> it is used for the cloning of the objects 
// 2-> It is used for the merging objects with same properties 

// A proxy objects in Javascript act like middleware between you and 
// another object allowing you to customize how certian operations are handled 

// Handler Objext - The Set of rules that defines how the proxy 
// should behave when someones tries to interact with the target object .

// var proxy = new Proxy(target , handler);

// const person = {name : 'Harsh Raj' , age : 34};

// const handler = {
//     get(target , prop) {
//         if(prop == 'name') {
//             l
//         }
//     }
// }

// If an Object is frozen using the Object.freeze() method then its properties become 
// immutable and no changes can be made in them whereas if an object is sealed using the Object.seal() 
// methid then the chnages can be made in the exisiting  properties of an 
// object 

// const object = {
//     a : "Good Morning ",
//     b : 100 , 
// };

// for(let value of Object.values(object)) {
//     console.log(`${value}`);
// }

// const user = {
//     name : "John",
//     gender : "male",
//     age : 40 ,
// }; 

// console.log(Object.values(user))


// const user = {
//     name : "John", 
//     printInfo : function () {
//         console.log(`My Name is ${this.name}`);
//     },
// };

// const admin = Object.create(user);

// admin.name = "Harsh";

// admin.printInfo();


// A Weakset is used to store a collection of a weakly held objects .
// The Syntax would be as following 
// new WeakSet([iterable])

// A Weakset in Javascript is like a Special Collection of Objects . 
// It is only stored to store only sets you cannot add the number , strings or obejects 
// No Duplicates - It doesnot allow for the duplication of the objects 

// Weak Reference -> This means that if there no other refernce to an object it can be automatically removed from the Weakset 

// let weakset = new Weakset();

// let obj1 = {name : "Object 1 "};
// let obj2 = {name : "Object 2"};

// weakset.add(obj1);
// weakset.add(obj2);

// console.log(weakset.has(obj1));

// obj1 = null  ; 

// The Main Differnce is that the refernce to object while the refernce to the 
// objects in Weakset are weak . An Object in weakset can be garbage collected if there is no other refernce on it . 

// Set can store any valu whereas Weakset can store only the Collection of the Objects .
// Weakset doesnot have the size property jsut like the set 


// The encodedURL Function is used to encode the complete URI which has the special characters 

// var uri = "https://mozilla.org/?x=шеллы";
// var encoded = encodeURI(uri);

// console.log(encoded)

// try {
//     console.log(decodeURI(encoded));
// }
// catch(e){
//     console.error(e);
// }


// Eval runs code stored as a String 
// Eneval Creates the String from the Code 

// An anonymous function is Javascript is simply a Function that doesnto have a name 

// function sayHello() {
//     console.log('hello');
// }

// // Anonymous Function assigned to a variable 

// let greet = function() {
//     setTimeout
// };

// greet();

// A Local Varibale takes precedence over the global variable with the same name  



// Advantages of Getters and Setters 
// 1-> They Provide the Simpler Syntax 
// 2-> 

// const person = {
//     firstName : "Harsh",
//     lastName : "Raj",

//     get fullName() {
//         return this.firstName + ' ' + this.lastName;
//     }
// };

// console.log(person.fullName)

// This is basically used when the we are not accessign the value of the 
// properties directly 

// A Setter is a methid that allows you to define a custom way to set the vale of the property 

// const person = {
//     firstName : 'harsh',
//     lastName : 'Raj',

//     set fullName(name) {
//         const parts = name.split('');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// person.fullName = "Ayush Kirloskar ";
// console.log(person.firstName); // "Jane"
// console.log(person.lastName);  // "Smith"


// In Javascript the Functions are No Data Type for the Parameters 
// // There  is no any type of Type Checking 
// There is Check on the Number of Arguments 

// Error Object -----
// AN error Object is a built in error Information when an error occurs .
// It has two properties name and message .
// try {
//     greeting("Welcome");
// }
// catch(err) {
//     console.log(err.name + )
// }

// A Synatx Error is thrown if you try to evaluate code with the synatx error 
// An Iterator is an object defines a defines a seqence and return value upon its termination . 

// An Iterator in Javascript is like a tool that helps 


/// Synchrnous Iterations was intrcuded and workd with tthe below set of components 

// Iterable : it is an Object can be iterated over vua method whose ke is Symbol iterator 

// Creation of Infinte Loop in Javascript 
// for(;;) {}
// while(true) {}
// This is used for the creation of the infinite loop in Javascript 
// as there is not ending case in this 

for(var i = 0 ; i < 4 ; i++) {
    // Global Space 
    setTimeout(() => console.log(i));
}

for(let i = 0 ; i < 4 ; i++) {
    // This is Block Space 
    setTimeout(() => console.log(i));
}


