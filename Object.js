// // let vehicle = {
// //     wheels: '4',
// //     fuelType : 'Gasoline',
// //     color : 'Green'
// // }

// // let carProps = {
// //     type : {
// //         value : 'Volkswagen',
        
// //     },
// //     model: {
// //         value : 'Golf'
// //     }
// // }

// // // var car = Object.create(vehicle , carProps);
// // // console.log(car);
// // // // This is the Creation of  Object whihc has the property from the same prototype 

// // // // What is the concept of Protyping Chain -- - 
// // // // It is used to build new typed of objects based on the exisiting ones . It is similar to the concept of inheritance 
// // // // in the class based language . When the create you an object using an constructor function the created object inherits properties from a prototype object 

// // // // The Prototype on Object instance is available through the 
// // // // Object.getPrototypeOf(object) or _proto_ property whereas prototype on the constrcutor function is available thrugh the Object.prototype 

// // // // What are the differences between the Call , Apply and Bind 
// // // // Call - The Call method invokes a function with a given this value and argument provide one by one 

// // // var emp1 = {firstName : "Harsh" , lastName : "Raj"};
// // // var emp2 = {firstName : "Ayush" , lastName : "Kumar"};

// // // function invite(greeting1  , greeting2)
// // // {
// // //     console.log(
// // //         greeting1 + " " + this.firstName + " " + this.lastName + " ," + greeting2
// // //     );

// // // }

// // // invite.call(emp1, "Hello" , "How are You" );
// // // invite.call(emp2 , "Hello" , "How are you" );

// // // // The Call Method invokes a Function with a Given this value 
// // // // and the arguments provided one by one 

// // // // Apply Method - Invokes the function with the given this value 
// // // // and allows you to pass in the argument as an array 

// // // var em1 = {firstName : "Siddhi" , lastName : "Sinha"};
// // // var em2 = {firstName: "Riddhi" , lastName : "Sinha"};

// // // // Now we are using the concept of  Apply as this uses the concept of Array 
// // // function Harsh(greeting1 , greeting2){
// // //     console.log(greeting1 + " "  + this.firstName + " " + this.lastName + greeting2);
// // // }

// // // Harsh.apply(em1 , ["Hello" , "how are you Doing ?"]);
// // // Harsh.apply(em2 , ["Hello" , "how are you doing the last statement"])

// // // Binds Return a New Function allowing you to pass any number of arguments 

// // var h1 = { firstName : "Ayush" , lastName : "Raj"};
// // var h2 = {firstName : "Riddhi" , lastName : "Sinha"};

// // function invite(greeting1 , greeting2){
// //     console.log(
// //         greeting1 + " " + this.firstName + " " + this.lastName + ","
// //     );
// // }

// // var invite1 = invite.bind(h1);

// // invite1("Hello", "How are you?")

// // // Basically Call is used to pass the any number of arguments and the Apply uses this as the Array 
// // // Bind creates a New Function that will have this set to the first parameter as the Object Creation and then the 
// // Apply is used witht the Number of Arguments as an array 
// // Call this is basically used with any number of arguments 

// // The Slice method returns the selected elements in an array 
// // as a new array object . It selects the element from the starting and ends at a given optional end arguments without including the last elemet 

// // let arrayIntegers = [1,2,3,4,5,6];
// // let arrayIntegers1 = arrayIntegers.slice(-3,-1);
// // console.log(arrayIntegers1);
// // console.log("This is getting executed")

// // // The Slice method returns the seleted elements in an Array as the new Array object 

// // // What is the Purpose of the Array Splice Method 
// // // The Splice method adds/remove items to from an array and then returs the 
// // // removed item . The First argument specifies the arrays insertion or the deletion whereas the 
// // // second element indicate the number of elements to be deleted 

// // let contactList = {
// //     "ALice" : "123456",
// //     "Bib" : "123456"
// // };

// // // Adding a New Contact 
// // contactList["Harsh"] = "12345678";

// // // Retireve the Conatact List 
// // console.log(contactList["Harsh"]);

// // In JavScript function are  the first class objects . This means when the function in that language are treated like any other variable 
// // These function can be passed as an argument as argument to other function 

// // const hasrh = () => {
// //     console.log("My Name is Harsh")
// // };
// // const higherOrder= (ReturnFirstOrderFunc) => ReturnFirstOrderFunc() ; 
// // higherOrder(hasrh)

// // const multiArg = (a, b, c ) => a + b + c ;
// // console.log(multiArg(1,2,300));

// // const curryUnary = (a) => (b) => (c) => a + b + c ; 

// // console.log(curryUnary(2));
// // console.log(curryUnary(1)(2));
// // console.log(curryUnary(1)(2)(3));

// // What are the Pure Functions - They return the same value is only determined by its arguments without any sort of sideefefects 
// // If you call the a function with same arguments N times then answer wold be same 

// // The let statement declares a block scope local variable . Hence the variable defiend with the let keyword are limited to the block scope 
// // wheeras the var keyword used to defined the variable globally 

// // Variable declared with the Var are just hoisted  and intialized as undefiend 
// // Whereas the let keyword is Hoisted but not Initilialzed 

// // with Var it is possible to re-declare the variable in same scope whereas the let keyword it is not possible to re-declare the variable 

// // const harsh = (username) => {
// //     if(username) {
// //         console.log(salary);
// //         // console.log(age);
// //         let age = 30 ;
// //         var salary = 10000; 
// //     }

// //     console.log(salary);
// //     // console.log(age);

// // }
// // harsh("Harsh")

// // Temporal Dead Zone is the specific period or area of  a Block where a varaible is inaccessible until it has been 
// // Intialized with the value . This behavior in Javascrrpt that occurs when declaring a variable with the let ans the const keyword but not with the var .

// // (function() {
// //     var message = "Hars";
// //     console.log(message);
// // }) () ;
// // console.log(message)

// // Memoizationn is the functional programming Technique which attemors to 
// // Increase a function performance by caching its previously computed wuth the result . 
// // Each Time a Mempized function is caleed its parameters are used to index the Cache 

// // const memoi = () =>{
// //     let cache = {};
// //     return (value) => {
// //         if(value in cache) {
// //             console.log("This is the Vle from Cache");
// //             return cache[value]
// //         }
// //         else {
// //             console.log("Calculating the Result");
// //             let result = value + 20 ;
// //             cache[value] = result;
// //             return result ; 
// //         }
// //     }
// // }

// // const addition = memoi() ; 
// // console.log(addition(20)); //output: 40 calculated
// // console.log(addition(20)); //output: 40 cached

// // The Conceot of Hoisting is that  variables  , function declaration and the classes are moves to the top of their scope before the execution of the code .
// // Javascript Only Hoists declaration not the Intialization 

// // A Closure in Javascript is a powerful feature where a function is bundled together with its surrounding 
// // State . in Simple Terms a Closure allow a function to access variable from its outer function even after that outer function has comoleted the executing 

// // function Welcome(name) {
// //     var greetingInfo = function (message) {
// //         console.log(message + "         " + name);
// //     };
// //     return greetingInfo ; 
// // }

// // var myFunction = Welcome("Harsh");
// // myFunction("Welcome My Dear");
// // myFunction("Welcome My Dear smjdbfgiawun");

// // Modules refer to samll unit of Independent reusable code and also act as the foundation for many Javascript Design Patterns 

// // IndexDB is low level API for client-side storage of larger amoount of structured data including the files as well as the blobs 
// // This is basically used for the high performance of the data 

// // WebStorage is an API tht provides a mechanosm by which browser can store key/value pair locally within the user browser . There are 
// // basically 2 Mechanism for the stroing the data in the client 
// // Local Storage - It Stores the data for the current origin with not Expiration Date 
// // Session Storage = It Stores the data for one of the session and then the dataa is being lost when the browser tab is closed 

// // Basically Cookie is a piece of data that is stored on your computer to be accessed by the browser . Cookies are saved in key/Value pair .
// // Cookie are basically used for remembering the Data that is stored in the profile 
// // When the user visits a web page then the uer profile can be stored in a Cookie 
// // Next Time the user visit the oage the cookie remebers the user profile 

// // Web Storage is more accuare and large amount of data can be stored locally without affecting the 
// // website performance . Also the information is never being transferred to the server 

// // What is the Concept of Promise 
// // A Promise is an Object that may produce a signle value sime time in future with either a resolved value . It can have 3 possible states 
// // Fulfilled , rejected or being the pendding 

// // const promise = new Promise(
// //     (resolve) => {
// //         setTimeout(() => {
// //             resolve("I am Being resolved")
// //         },5000);
// //     },
// //     (reject) => {} 
// // );

// // promise.then((value) => console.log(value))

// // const harsh = new Promise(
// //     (resolve) =>{
// //         setTimeout(()=>{
// //             resolve("I am Being  a Promise")
// //         },5000)
// //     },
// //     (reject) => {}
// // );

// // harsh.then((value) => console.log(value))

// // Promises are used for the Handling the asynchrnous operation . They Provide an Alternative 
// // approach for the callback by reduncing the callbacks and also reducing the chances of the 
// // Callback hell and writing the Cleaner Code 

// // Callbacka are the Function that are passsed in to another function The Function is just invoekd as the outehr fnction complete the xecution 

// // function callbackFunction(name) {
// //     console.log("Hello "  + name);
// // }

// // function outerFunction(callbackFunction) {
// //     let name = prompt("Please enter your name.");
// //     callbackFunction(name)
// // }

// // outerFunction(callbackFunction)

// // The Callback are needed because of the javascript is an event driven language . That 
// // menas instead of waiting for the response of the javaScript will keep executing while listening for others events . 
// // This could be an example for the case in which we take a API for the data Fetching and the response gets generated when we  gets the promise execurted 

// // Callback hell is basically a oattern for the muiltiple nested callbacks which makes the code hard toread and debug when dealing witht the asyncghrinous code 

// // A Promise is an Object that supplies a Stndard-comppliant ,then Methodn 
// // You can nest the Callback inside each other so there are multiple execution which  can be dome 

// // const harsh = new Promise(
// //     (resolve) =>  {
// //         setTimeout(()=>{
// //             resolve(1)
// //         },1000)
// //     }
// // );

// // harsh.then((value) => {return value *  2} )
// // .then((value) => { console.log(value)})

// // Priomise.all is a Promise that takes an array of Promise that takes as array as an input 
// // and it gets resolved when all the promise get resolved and if any of the promise gets rejected all the promise 
// // are then reject 


// //  Promise.all([Promise1 , Promise2 , Promise3])
// //     .then(result => {
// //         console.log(result);
// //     })
// //     .catch(error => console.log(`Error in Executiing in this code as there is some sort of error ${error}`))

// // Promise.race() method will return the promise instance of the object which is firstly resolved or rejecetd . 

// // var promise1 = new Promise(function(resolve , reject){
// //     setTimeout(resolve , 500 , "one")
// // });

// // var promise2 = new Promise(function (resolve , reject){
// //     setTimeout(resolve , 100 , "two")
// //     console.log("This is getting execuetd ")
// // });

// // Promise.race([promise1 , promise2]).then(function(value){
// //     console.log(value)
// // })

// // Strict Mode is a new Feature in ECMA Script 5 that allows you to place a program in strict operation Conetxt . 
// // This way it prevents certain actions from beong taken and throws more exception 

// // STrict Mode is used to write the secure JavaScript by nitifying the bad synatx into the real errors 
// // The Double exclamation or negation ensure that the resulting type is a Boolean 

// // console.log(typeof "Harsh Raj");

// // The Undefined property indicate that a variable has not been assiggned a Value or Declare but not intialised with 

// var user ; 
// console.log(typeof user)
// // This will return the undefined becuase the variable has been declared but it has no value which has been intialzed 

// // Whereas the Null Represents the Intentional Absence of an Object value 
// // It is one of the Javascript Primitive values . the type of the Null value is object 
// var user = null ; 
// console.log(typeof user );

// // Null - This is an assignment value which indicate that variable points to no object 
// // Type of Null is Object 
// // The Null Value is primitive value that represents the Null , empty and non-existent refernce 
// // Indicates the Absence of a Value from the Variable 

// // Undefined 
// // It is not an assignemt value where a variable has been declared but has not been assigned a value till yet 

// // Windiw is basically the root level elemet in any of the web page 
// // It has methods jsut like the alert and confirm and propertiees 

// // Document is the direct child of the window object . This is Known as Document Object Model 
// // This is accessed via the window.document or the document Object Model 

// // NaN function is used to determine whetehr a value is an illegal numebr (Not a Number ) or not . The Function return rue if the value equates to NAN 

// // Undeclared - These avraibles do not exist in a program and are not decalred 
// // If we try to access them then we will get aruntime encountered 

// // GLobal Variable are those that are availbel thrighout the length of the code without any of the scope . The var 
// // keyword is used to declare a local variables 

// // The Problem with the gloabl variables is the conflict witht e variable names of the local and global scope 

// // Event Flow is the order in which the event recieved on the web page . When you click an elemetn that is nested in avrious other elemenst before your lcik to the actually destinations it must trigger the click for the event for its parent and the top with the global window object 

// // Event Bubbling is the concept of javascript where an event that is triggered on the 
// // specific elelemt start to propogate upwars or bubble up throught the ancestoes of that element in the Document Object Model . this Means if you click any element it will trigger any of the event liosterns 


// //  Pros and Cons of Promise over the Callback 
// // 1--- It avoid the callback hell which is unreadable 
// // 2-- Easy to write the sequentoal asynchrnpis code with.then() 
// // 3--- Easy to write the parallle asynchrnous code withe Promise.all()

// // Attributes are defined on the HTML markup whereas properties are defined on the DOM 

// // Same-Origin Policy 
// ///- The Same-origin policy is a plicy that prevents Javascript from making the reuest across the domain Boundaries 
// // An Origin is defined as the combination of the URL scheme , hostname and port number 

// // JavaScript is an Interpretated language not a comiled language . An Interpreter in the browser 
// // reads over the Javascript code interprets the each of the line and runs it .

// // Events are the things happen to HTML elemets . When javascript is used in the HTML pages Javascript can react on these events 
// // The preventDefault() method cancels the event if is is canelable meaning that the default action or the  behaviour to the event will not occur 

// // The Stop Propogation method is used to stop the event from bubbling up the event chain . 

// // What is the Concept of BOM(Browser Object Model) allow JavaScript to talk to the browser 
// // It consists of Object Navigator , History , Screen and the Location and Document which are the children of the window 

// // // setTimeout
// // setTimeout(function () {
// //     console.log("Good Morning")
// // },2000)

// // What is the Concept of setInterval 
// // This method is used to call a function or evaluate an expression at specific intervals 
// setInterval(function(){
//     console.log("Good Morning")
// },2000)

// // JavaScript is a Single Threaded language because the language specification does not alloew the programmer to write code so that the 
// // Interpreter can run parts in the parallel in multiple threads or the processes 

// JSON (JavaScriot Object Notation) is a lightweight format taht is used for the data Interchanging . It is based on a subset of Javascript language in the wy objexts are built in Javascript 

// var userJSON = {name : "harsh" , age : 31};
// var user = JSON.stringify(userJSON);
// console.log(user)

// const timeoutID = setInterval(() =>{
//     console.log('This  messgae show up after 3 seconds')
//     cancelTimeout();
// },3000);

// // Function to cancel the Timeout 
// function cancelTimeout() {
//     clearInterval(timeoutID);
//     console.log("Timeout has been canceled")
// }

// var mainString = "hello";
// var word = "hello";
// console.log(mainString.includes(word));

// Getthe Query use the URL Search Params to get the Query 

// const user = {
//     name : "Harsh",
// }
// console.log(user.name !== undefined);

// The argument objects is an Array-like object accessible inside the function that contains the  values of the argument passed in that function 

// function sum() {
//     var total = 0 ;
//     for(var i = 0 , len = arguments.length ; i < len ; ++i){
//         total += arguments[i];
//     }
//     return total ;
// }

//  var total = sum(1,32,3);
//  console.log(total)

// function capitalze(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// var word = capitalze("aarsh")
// console.log(word)

// The for-llop is commonly used for the iteration synatx in javascript 

// There is the Prototype for the String.prototype.startWith()
// Methods to check if the String with aoher string or not 
// console.log("Good Morning".startsWith("Harsh"))

// function sum(num1 , num2  , num3 , num4){
//     return num1 + num2 + num3 + num4;
// }
// console.log(sum.length);

// function randomInteger(min , max) {
//     return Math.floor(Math.random() * (max - min + 1 )) + min ; 
// }

// var sum = randomInteger(1,100);
// console.log(sum)
// console.log(1+2+'3')

// We can use the Concept of InnerWidht , clientWidht and properties of the Windows ans document element to find the size of the window 

// var isauth = false ; 
// console.log(
//     isauth ? "Hello, welcome" : "Sorry, you are not authenticated"
// //   );
// _proto_ is like the inheritance chain pointer and automatically set up the JavaScript to link the object and enable prototype based inheriatnce . 
// // Whereas the Prototype on the other hand is a property of constructor function that defines what _proto_ should be for the creating the objects 

// the Spread operator allow the Iterables (arrays/ Objects / Strings) to be explainded into aa single argument / elemt 

// const target = {a: 1 , b: 2};
// const source = {b: 3 , c: 4};

// const result = Object.assign(target , source);

// console.log(target);
// console.log(result);

// The Object.seal() method is used to seal an object by preventing new properties from being added to ot and 
// marking all the exisiting properties as non- configyrable 

// const user = {
//     name : "Harsh",
//     gender : "Male",
//     age : 40 , 
// };

// console.log(Object.values(user))

// const user = {
//     name : "Harsh",
//      printInfo ()  {
//         console.log("Printiung Somethign ")
//     }
// } ; 

// const admin = Object.create(user);
// admin.name = "Harsh";
// admin.printInfo();


// const mySet = new Set() ;
// mySet.add(1);
// mySet.add(2);
// mySet.add(2);

const myWeakSet = new WeakSet();
let obj = { name: "Harsh" };

myWeakSet.add(obj);

obj = null; // The object can be garbage collected since it's not strongly held

console.log(myWeakSet); // Output: WeakSet { <items unknown> }

