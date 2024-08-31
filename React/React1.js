// // if you try to update the state directly then it wont re-render the component 
// this.StaticRange.message = "Hello World";
// // Instead to this use the setState() . It schedules to a 
// // compoment state object . 

// // // set State is a method is used to update a component state and trigger a re-rneder .
// // Hence the asynchronous meaning that the state update does not happen immediately . 
// // React schedules the update that any batch and multiple state updates together for the performance reasons 

// // the basic use of the callback function is such that if we rneder the name of the candiadte them we have to log a messgae 
// // that the message has been rendered so it is called only when the function has been executred 

// this.setState({name : "John"} , () => {
//     console.log("This name has been upodated and the component has been rendered\")
//         // 


// })
// // This is basically used when the following is called when the componentDidUodate has been performed 

// React has some sort of event handlers in the constructor to ensure they have the correct this keyweord 

// class User extends Component {
//     constructor(props) {
//       super(props);
//       this.handleClick = this.handleClick.bind(this); 
//     }
  
//     handleClick() {
//       console.log("SignOut triggered");
//     }
  
//     render() {
//       return <button onClick={this.handleClick}>SignOut</button>;
//     }
//   }
  
// Use the bind method as this is creating a new Function each and every time so there might be performance issues 

//  We can use an arroe function to wrap around an event handler and pass the parameters 
{/* <button onClick={() => this.handleClick(id)}/>

// This is also equa to the bind method for the following code 
<button onClick={this.handleClick.bind(this, id)}/> */}

// The ref is used to return a refernce to the element . They should be avoided in most of the 
// cases they can be useful when you need a direct access to the DOM element 

// The ref is created in the constructor and assigned to an instance property
// The ref attribute is then set to this this.myRef allowing React to asssign the 'div'
// DOM element to the 'this.myRef.current'

// Ref Forwarding is a feature that lets some components take ref they receive and pass it 
// further down to a child 

// Ref in React are used to directly access and intetact with a DOM element or a React Component instance .
// Manage Focus , Text Selection and Media Playback 
// Trigger Animations 
// Integrate with Third Party DOM Libraries 

// useRef and useEffect are used to mimic the behavior of the 
// componentDidMount 

// React Components go through a series of phases during their existence which can be divided in 3 major phases 

// Mounting - The Mounting phase occurs when the component is being 
// inserted into the DOM for the first time . This phase is crucial for setting up the 
// initial state and the side effects 
// Constructor - This is the method called when the component is initialozed . It is used to set up the initial state and bind the 
// event handlers // getDerivedStateFromProps(props , state) 
// A static method that is caleed right before rendering the both on the 
// intial mount and the subsequent updates 
// The only required lifecycle method in class component responsible for describing the UI structure 
// Invoked immediately after the component is mounted . This is where you should initate network requests 

// Updating 
// 1 ---// The updating phase occurs when the components state or props change . 
// React needs to determine if a re-render is necessary and then update the component accordingly 

// getSnapshotBeforeUpdate(prevProps , prevState): Called right before the most recently renderd output is commotted to the DOM 
// It allow you to capture some of the Information from the DOM 

// UnMounting - 
// This phase is the final phase of a component lifecycle where it is removed from the DOM 
// This phase allow you to clean up the resources to avoid memory leaks 

// componentWillUnmount() -- This method is called right before the component is destroyed and unmounted . 
// It is typically used for  the cleaning up the timers canceling the network requets or removing the item 

// componentWillMount -- This is executed before the rendering and is used for the App Level configuration in the root component  
// ComponentDidMount -- Executed after the first rendering and here all the AJAX request , DOM or  the state updates and set up the event listerners 

// getDerivedStateFromProps(props , state) --- 
// This method is called right before every render when both when the component firsy mounts and when it updates 
// If you want to adjust the state every time new props you can use this method 

// ComponentDidMoint() -- 
// This method runs after the component has been rendered for the first time and added to the DOM 
// This is where you should perform any setup tasks like the fetching the data from the API settign up the 
// subscription 

// getSnapShotBeforeUodate(prevProps , prevState)---
// This method runs right before the changes from the render are applied to the DOM 

// What is Context 
// This provides a way to pass the data through rhe componets tree without havong the pass props down 
// manually at the every level 

// Function bieng called for every time at the compoennt renders 

// render() {
// return <button onClick = {this.handleClick()}
// }

// Error Boundaries are the componet that catch javascript errors anywhere in their child compomemt 
// tree and log those error and display  a fallback Ui instead of the compenet tree has been crashed 

// This method is used to render  a React elemment into the DOM in the supplied container 
// and return a refernce to the component . 

// The ReactDOM.render() is used to display a React Compoenent on the Screen 
// It basically takes 2 main arguments 
// Element - The React Element you want to show 
// container - The DOM element where the React componrnt will be rendered (just like the div )

// What is State Mutation and How to Prevent it 
// State Mutation happnes when you try to update the state of a componrnt without the actually using the setState functyion 
// State variables are just immutables either enforcing the immutabiloty bvy using the plugins such as Immutable always using the setState to make the upodates and 
// returning the new insycnce in the reduces when sendign the updates state value s

// Conetxt is desinged to share that can be considered global for a Tree of react Components .