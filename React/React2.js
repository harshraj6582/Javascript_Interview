// // React is open source front end Javascript Library that is used for the 
// // building of the composable user interfaces especially for the single page application 
// // Use of JSX syntax a extension of the JS that allows developers to write the code in thier JS code 
// // It uses the concept of Virtual DOM instead of the Real DOM 
// // considering the Real DOM manipulations are expensive 
// // Support for the Server Side Rendering which is ueful for the Search Engine Optimisations 
// // Follows the Unidirectional or one way Dta flow or the data binding 
// // USes the reusable / composable UI components to develop the view 

// // What is the concept of JSX 
// // It stands for Jaavscript XML and it is an XML like syntax exntension to ECMA Script . 
// // It provides the syntactic sugar for the react.createElement(type , props , ...children)
// // function giving us the expressiveness of the Javascript along with the HTML 

// // What is the Differnce between the Element and Component 
// // An element is a plain object describing thr what you want to appear on the screen 
// // in terms of the DOM nodes or other componnets .  Element can can container other Element in the props 
// // Component can be declared in several differnet ways . It can be a class with a render method 

// // const Button = ({ handleLogin}) => (
// //     <div id = {"login-btn"} onClick = {handleLogin}>
// //     Login Button 

// //     </div>
// // )

// // // then the following JSX gets transpiled to a React.createElement() 


// // Functional Components : This is the simplest way to create a Coponent . Those are the pure Javascript Functions that acceos props object as one and only one paramter to  teturn the 
// // React Element 
// //  function Greeting({messgae}) {
// //     return <h1> {This is just the HEaifn }</h1>
// //  }
// // When we need state or the lifecycle methods and your component is purley presenattional 

// // Pure Components are the React Componengt that only re-render if their state or the props have been changed 
// // Pure Components only re-render when the there is change in the props or the state . If their omput is same there is not any sort of the re-rendering 

// // React uses a Shallow comparison to check if the previous props and state are the same as the new ones / If they are same the component will not re-rneder 

// // Check if the two variables refernfce to the same location

// // What is the concept of React 
// //----State of a compoennt is an object that holds some information that may change over the time period 
// // The imp part is that whenevr the state object changes the component re-renders . It is alwats 
// // Props are the inputs  to the componets . they are single value or the object conatining the set of avlues that are passsed 
// // to components on creation is similar to the HTML tag attributes 
// // Purpose of the props ;;;;
// // Pass the custom data to your component 
// // Triggers the State Chnages 

// // const ChildComponent = (props) => {
// //     return (
// //         <div>
// //             <p>{props.name}</p>
// //             <p>{props.age}</p>
// //         </div>
// //     );
// // };

// // const ParentComponent = () => {
// //     return (
// //         <div>
// //             <ChildComponent name = "harsh "></ChildComponent>
// //         </div>
// //     )
// // }
// // In React bo t state and props are the plain jaavscript Object and are used to manage the data of the componnets 
// // they are used in diffent ways and have different characteristcics .
// // The state entity is managed by the Component itself and can be updated using the 
// // setter(setState()) for the class componenst . Inlike props state can be modifed by the component ans is used to manage the intervla state of the component .
// // Props are passes to a componnet by its parent componnegt and read only they cannot be modified by the own components 

// // SyntheticEvents is a cross browser wrapper around the browser native event . It API sis ame as  the browser native element including the 
// // stopPropagation() and the preventDefault() except work identically 

// // State entitiy is managed by the componnet itself and can be updated using the 
// // setter (setSatte() for the class component) functions . 
// //  State can be directly modififed by the components and is used to manage the internal state of the componnet 

// // // // if the Statments or the ternary expressions which are available for the JS to conditionally render the expression 
// // // Apart from that we can just wrap them arounf the curly braces 

// // <h1>Hello</h1>;
// // {
// //     messages.length > 0 && !isLogin ? (
// //         <h2>You have {message.length} unread message</h2>
// //     ) :
// //     (<h2> You dont have the unread message</h2>)
// }

// // A key Prop is a Specila attribyte you should include in the mapping over the arrays tp render the data 
// // It helps react to indentify which itemhs have beeen changed  or added or are removed . 
// // KEys should be unique 
// // const todoItems = todo.map((todo) => <li key = {todo.id}> {todo.text}0</li>)

// // Using the Indexed for the keys is not recommended if the order of the items may chage . This can have the negative impact on the perfomace and may cissue issues wiot the component state 

// // When the list order changes using the Idnexes as the ky can caiuse the React to think the item content has been chanegd 
// // This would cause the unnecessary re-render and might cause the compoent to lose their state 
// // 

// // The Virtual DOM is an in-memory Representation is representataion of Real DOM 
// // The representation of UI is kept in memory and synced with the real DOM it is step that happens betweent the render function being caleed and the displaying element on the screen 

// // The Virtaul DOM is like a blueprint or a copy of the real DOM which represents the strcutrue of the web apge . The VDOM exists only in memory and is not directly visible to the user 
// // The Virtual DOM is a lightweight copy of the actual SOM stored in the memory without directly affecting the browser DOM 

// // When you make the changes to your UI these changes are first applied to the Virtual DOM rather than the Real DOM 

// // State is an object that holds information about the information about the 
// // component that can change over the time 
// // State lived inside the compoment and is managed by that component 
// // Only the compoent that owns the state can change it using the setState in a class 
// // use of useState in function components 
// // use State when you need to track changes over the time suchh as time user input 

// // Props are the read only inputs passed to a Componet from its parent componnet 
// // Props are passed down from a parent component to a child component 
// // Props are just immutable inside the child component the child cannot be change the props direclty 
// // Whenver any of the underlying data changes the entire UI is re-rendered in Virtaul DOM representation .
// // Then the difference between the previous DOM representation and the new one is calculated 
// // Once the calculation are done the real DOM will be updated with the only the things have actually changed 
// The Shadow DOM is a browser technology designed primarily for scoping variables and the CSS in web components . The Virtual DOM is a concpt implemented by the libraries in Javascript on the top browser API 
// // The Shadow DOM is a web Technology that helps encapsulate the part of a webpage like the component to keep in the structire 
// //  It is mainly used to scope variable and CSS so that the styles and scripts of a web development do not interfere with the rest of the page 

// // A Private hidden box inside a webpage Everything inside the this box is protected and doesnot affect anything outside the box 

// // What is the Concept of Virtual DOM 
// // It is used to concept by Javascript libraries to improve performance when building web applications 
// // It acts as lightweight copy of the real DOM Document Object Model . When somehting change on the webpage the Virtaul DOM helps 


// Uncontrolled Components - These are like the traditional HTML form element . They manage their own state internally in the DOM rather than controlled by the React 
const usernameRef = useRef(null);
// We use the uncontrolled componnet are simpler to implemenmt because you dont need to write state management logic 

// Controlled Component - React recommends using the controlled components for the form handling . The form data is hadnled by the React State . Every Input value throgh the React componrnty srare 
// which gives you full control over behavior and validation 
// Uncontrolled - These are the useful when you need a quick and simple way to manage form data Reactr

// JSX elemet will be transpiled to React.createElement() function to create React elements which are going to used for the representation of UI 

// Lifting State Up is React pattern when multiple components need to share the same peice of data or state .
// Instead of each component mainting its owbn

// React Fiber is like the new smater version of the engine that powers React . it is designed to make React app faster and more responsive in Reac . This helps om the smooth animations and handling user interactions
// The Goal of React Fibver is to increase its suitability for the areas like the animation , layout and gestures . 
// Its headline feature is incremental rendering 
// The Main Goal of React Fiber 
// Ability to split the interruptible work in the chunks 
// Ability to prioritize the rebase and reuse work in progress 
// Ability to return multiple element from the render 
// Better Suppoort for the error boundaries  

// Controlled Components in React 
// These are the components where React Controls the form element value through the component state 
// React manages the inout data ensuting that the displayed data always matched the state of the component 

// React State Control - The input element value is linked to the state of the React component 
// Synchronous Updates - Every time a user types in the input field React immediately updates the state keeping the UI and state in Sync 
// You need to create event handlers onChange to handle user input and update the state accordingly 

import React , {useState} from "react";

function UserProfile() {
    comst [username , setUsername] = useState("");

        const handleChange = (e) => {
            setUsername(e.target.value);
        }

        return (
            <form>
                <label>
                    Name : 
                        <input type ="text" value = {username} onChange = {handleChange}></input>
                </label>
            </form>
        )
}

// Controlled Components keep the form data in sync with the React state ensuring the consistent behavior allowing for the better flexible form handling 

// The Uncontrolled Componenet are the ones that store their own state internally 
// and you query the DOM using the ref to find ist current value when you need it 
// This is bit more traditional to the HTML element 
// Create a ref using the useRef react hook in the function component or the React.createRef(0 in the class based componrny )
// Attach this ref to the form element 

// JSX elemets will be traspiled to React.createElement() function to create React elements which are going to be used for the object represenatation of the UI 

// When several components need to share the same changing data then it is recommeded to lift the share state up to their closet common ancestor 
// That means if two child componnets share the same data from its aprent then move the state to the parent insted of the maintaining the local state in both of the child 
// components 

// A Higher Order Component is a function that nakes a component and returns a new component . basically it is a pattern that is derived from the React composotional nature 

// Children is a prop that allows you to pass component as data to other components just like any other props you use 

// What is Reconciliation -- This is the process through which React Updates the Browser DOM and makes the React work faster . 
// React use the diffing algorigthm so that component updates are predictable and faster . React would forst calculate the diffenrce between the real DOM and Copy of DOM (Virtual DOM ) 
// when there is update of the components 

// What are teh Fragments - 
// It is common feature or practice in React for a Componnet to return multiple element 
// Fragments let you group a list of children without adding the extra nodes to the DOM 

// Fragments are a bit faster and use less memory by not creating an extra DOM nodes 
// The DOM Inspector is less cluttered 

// Portals in react provide a way to render a child component or element into differnet part of the DOM that exits outside the hierarchy of the parent componnet 
// What are the stateful Componnets ---- 
// If the behavior of a component is dependent 