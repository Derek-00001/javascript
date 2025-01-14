//to solve callback hell we use promises
//promises is an eventual completion of task. It is an object in JS. 
// syntax 
// let mypromise = new Promise(function(resolve,reject){
    //code 
// })
// note - here resolve and reject are callbacks provided by JS
// ANOTHER SYNTAX

// let mypromise = new Promise((resolve,reject) => {
    //code 
// })
// A promise has 2 properties: state and result
// // if state is ........ then result is ........ 
//                pending                 undefined   
//               fulfilled                a value
//                rejected                error object 


// let promise = new Promise((resolve,reject) => {
//     console.log("I'm a promise");
//     // reject('some error occured');
//     resolve('value is passed now');
// })

// note - in promise if we have to show state and result we Use 
// for resolve and pending  state we use promise.then((res) => {...})
// for reject state we use promise.catch((err) => {...})
// here res is for result and err is for error and ye  res and err  ki vo value hai jinko hamne resolve ya reject  krte time pass kiya hoga.
// we can print our res and err as shown below
// take a new example 

// const getpromise = () => {
//     return new Promise((resolve,reject) => {
//         console.log("I'm a new promise");
//         reject('some error occured');
//         // resolve('success');
//     })
// }

// let promise = getpromise();
// promise.then((res)=>{
//     console.log('fulfilled',res);
// });

// promise.catch((err)=>{
//     console.log('rejected',err);
// })








