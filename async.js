// to get rid of promise chian problem we use async-await functions 
// ASYNC-AWAIT 

// async function always return a promise 
// // Await pauses the execution of its surrounding async function until the promise is settled. 
// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise

// The keyword async before a function makes the function return a promise

// The await keyword can only be used inside an async function.

// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

// syntax 
// async function myfunc() {
    //code  
// }
//EXAMPLE
// asyn

//  function hello (){
//     console.log('hello async');  
// }


function api ()  {
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('weather data');
    }, 2000);
})
}

async function getweatherdata (){
    await api(); // 1st call
    await api(); //2nd call 
}





