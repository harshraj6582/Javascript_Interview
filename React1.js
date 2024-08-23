// // React is an Open-Source Front end javascript Libraray that is 
// // used fir building the composable user interface especially for Signle Page Applications 

// // The main idea of creation of react was to make the fron-end code more easier and help to understand and th help the avoid cross sote scripting atatckss 


// // The Major Features of React - 
// //1- Uses the JSX synatx extension of JS that allow the developer to write the HTML in their code in JS code 
// // It uses the concept of Virtaul DOM instead of Real DOM manioulation are expensive 
// // It Supports the concept of SSR which is ueful for the Search Engine Optimization 
// // It Follow the concept of Unidirectional or one way flow or data binding 
// // USe reusable / composable UI components to develop the view 

// // What is JSX 
// // JSX Stands for JavaScript XML and it is an XML like syntax extension to ECMA Script 
// // basically it just provides the synatactic sugar for the React.createElement(type , props , .. children)

// export default function App() {
//     return <h1>Hello this is  a JSX Code </h1>
// }// This is the concept of JSX syntax 

// import {createElement} from "react";

// export default function App() {
//     return createElement(
//         "h1",
//         {className : "greeting"},
//         "Hello This is a JSX COde "
//     );
// }

// // An Element is a Plain Object describing what you want to appear on the screen in terms of the DOM nodes or other components .
// // Elements can conatin other Elements in their Props . Creating a React 
// // element is less expensice 

// const element = React.createElement("div" , {id : "login-btn" , "login"})

// // This concept is used for the React Componets 

const Button = ({handleLogin}) => (
    <h1> Login </h1>
)
// Class 