// // A Callback is a function passed as an arguement to another function which is the 
// // executed inise the outer function to complete some kind of the routine or action . 
// // This concept is main when dealign with when handeling the 
// // asynchronous operation jsut like reading the files 
// // making the HTTP requests or setting Timers 

// // function greet(name , callback){
// //     console.log("Hello" + name);
// //     callback();
// // }

// // function sayGoodbye() {
// //     console.log("GoodByee");
// // }

// // greet("Harsh" , sayGoodbye);

// // function fetchData(callback){
// //     console.log("Fetching the Data...");

// //     setTimeout(() =>{
// //         console.log("Data Fetched");
// //         callback("here is your Data");
// //     },2000);
// // }
// // function displayData(data){
// //     console.log("Displaying the Data"  + data);
// // }
// // fetchData(displayData)

// // async function fetchData(){
// //     console.log("Fetching the Data...");
// //     let data = await new Promise((resolve , reject) =>{
// //         setTimeout(() =>{
// //             resolve("data Fetched");
// //         },2000);
// //     });
// //     console.log(data);
// // }
// // fetchData();

// function getUser(userId) {
//     return fetch(`https://api.example.com/user/${userId}`)
//         .then(response => response.json());
// }

// function getOrders(userId) {
//     return fetch(`https://api.example.com/orders/${userId}`)
//         .then(response => response.json());
// }

// function getOrderDetails(orderId) {
//     return fetch(`https://api.example.com/orderDetails/${orderId}`)
//         .then(response => response.json());
// }

// getUser(1)
//     .then(user => {
//         console.log('User:', user);
//         return getOrders(user.id);
//     })
//     .then(orders => {
//         console.log('Orders:', orders);
//         return getOrderDetails(orders[0].id);
//     })
//     .then(orderDetails => {
//         console.log('Order Details:', orderDetails);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
