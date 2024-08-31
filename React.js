// React or React js is an Open source front end javascript 
// Library that is used for building the user interfcaes especially for the single page applications . 
// It is used for handlign view layer for the web and the mibile appls for the comapnents in 
// What are benefits of using React 

// The main princciple for the front end for more easier to unders
// class Harsh {
//     constructor() {
//         this.name = "Harsh ";
//     }
// }

// const fun = (harshInstance) => {
//     setTimeout(() =>{
//         console.log(harshInstance.name)
//     },5000)
// }

// const harsh = new Harsh() ; 
// fun(harsh);

// Class Definition is defined with a constcrutor that Intializes the name property 
// Arrow Function - The Func function takes an instance
// of 'Harsh' class as argument and logs the name after the delay for the 5 seconds 

// The Main Principle of this extension was to make the code easier to underyand and help avoid across the cross 
// site scripting attacks 

// JSX stands for the JavaScript XML and it is an XML like synatx extension for the ECMA Script 
// Basically it provides the syntactic sugar for the 
// React.createElement(type , props , ... children)

// export default function App() {
//     return <h1> Hello World this is Application </h1>
// }

// import {createElement} "react";

// export default function App() {
//     return createElement(
//         "h1",
//         {className : "greeting"},
//         "Hello , This is a JSX Code"
//     );
// }

// JSX is stricter than the HTML 

// An Element is an plain object describing  what you want to appear on the scrren in term sof the DOm Nodes 
// Element can combine other Elements in their props . Once the element has been created it cannnor be mutated 

// const element = React.createElement("div" , {id : "login-btn"} , "Login");

// // Element can be Simplified usign the JSX 
// <div id = "login-btn">Login</div>

// // 
// {
//     type : 'div',
//     props: {
//         children : 'Login',
//         id : 'login-btn'
//     }
// }

// const Button  = ({handleLogin}) => (
//     <div id = {"login-btn"}> This is just the login Button  </div>
// )

// const Button = ({handleLogin}) => 
//     React.createElement(
//         "div",
//         {id : "login-btn" , onClick : handleLogin}
//     )

//

// After the Addition of the Hools it is always generally to use the Function Componnet over the Class Component 
// in React Because you could use the State lifecycle methods and other features that were onyl avaible in the class component 

// If you need a React Functionality for those function component is not present yet like the Error Boundaries 

// // 
// const MemoizedComponent = memo(SomeComponent , arePropsEqual?);
