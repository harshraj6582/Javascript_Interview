// // A Switching Component is a React wway fir rendering differnet compoenents based on some sort condition like the specific value of the prop . It is called the switching component becuase of some condiotion 
// // This is basically used for switching the componnets becauser it swithces between the differnet Compoenents on what you need to show 

// const PAGES = {
//     home : HomePage,
//     about : AboutPage,
//     services: ServicesPage,
//     contact : ContactPage
// };
// const Page = (props) =>{
//     const Handler = PAGES[props.page] || ConatactPage ;

//     return <Handler {...props}/>
// }

// // If you are rendering your component using the JSX the name of the Componnet has to begin with the capital letter 
// // Otherwise the React will throw an error as an unrecognized tag 
// // How to Loop Inside the JSX Component 
// <tbody>
//     {DataTransferItemList.map((item) =>
//     <SomeComponent key={items[i].id} name= {item[i].name}/>
//     )}
// </tbody>
// React - This is the basic package in the core of the React . It Contains the basic function needed to create and manage the React components 
// // React.createElement() Used for the create React Elements which are used for the building blocks of the React Application 
// // React.Component - A Base class for defining the componnets 
// // React.Children - Utilies for the working with the children props 

// // What is Concept of React DOM 
// // The React-dom is the package is specifically designed for the web application . It handles the interaction between the React and the browser Document Object Model 
// // React DOM Server is basically used for the server side rendering for the conversion of the code into the HTML Language 

/// React Router is a powerful routing libraray built on the top fo the React that helps you to add new screns and flows to you application 
// quickly all while keeping the URL in sync with what is being displayed on the Screen 
// React Router is a wrapper for the history libraray which handles interaction with the browser window.history
// The purpose of Push and the Replace the navugation of the things are 
// Push is basically used for the add new location to the array and replace the current lication in the array with the new one 

// The react-router dom provides the Redirect Component Rendering the Redirect Page will naviagte to new location 

// Shallow rendering is useful for writing the unit test cases in React . 