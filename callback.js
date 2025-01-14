// synchronous me code hamesha line by line chalta hai means ye task one by one karta hai 

// async me code line by line nahi chalta , saara code ek saath shuru kar diya jaata hai and 
// jo task  pehle complete ho jaaye uska answer de diya jaata hai 

// A NEW SECTION TO STUDY IN JS 
//  this keyword 
//  The value of this keyword in following 
// global - window
// console.log(this);
// function - window
// function abcd(){
//     console.log(this);
// }
// abcd();
// method - object 
// aisa function jo object ke ander ho usse method kehte hai 
// var objj = {
//     name: function(){
//         console.log(this);
//     },
//     age: 25
// }
// objj.name()
// function inside method(es5) - window 
// var obj2 = {
//     sayame: function(){
//         console.log(this);
//         function child(){
//             console.log(this);
//         }
//         child();
//     }
// }
// obj2.sayame();
// function inside method(es6) - object
// var obj3 = {
//     sayName: function(){
//         const child = ()=> {
//             console.log(this);
//         }
//         child();
//     }
// }
// obj3.sayName();
// constructor function me this ki value - new blank object 
// function add(){
//     console.log(this);
// }
// if I run this then it will give me window 
// add(); but
// if I do this 
// const ans = new add(); 
// event listener me this ki value - that element jispe event listener laga ho 
// always remember event listenner me this ki value hamesha addeventlistener se pehle wala
// element hi hota hai. ex - here the value of this is button.
// document.querySelector("button")
// .addEventListener("click", function(){
//     console.log(this);
// })

// RESTART ASYNC JS AGAIN

// Callback - a callback is a function passed as an arguement to another function. 
// in simple words jab ham kisi function me dusra function pass krte hai usse callback kehte hai. for example 

// function sum(a, b) {
//     console.log(a + b);
// }
// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(2, 3, sum);
// NOTE- here we can name our callback anything. for example here we used it as sumCallback
// also note that in calculator(2,3, sum);.....writing sum function is important, without it this won't work and give error.
// LOOK AT ANOTHER EXAMPLE

// const hello = () => {
//     console.log('HELLO');
// }

// setTimeout(() => {
//     console.log('HELLO');
// }, 3000);


// what is callback hell ?
// Nested callback stacked below one another forming a pyramid  structure.
// this style of programming becomes difficult to understand and manage. let's take an example....we want to print a data and then want to print a different data but after 2s of first data and same for third data then how we gonna do it ? 
// function getdata(dataid, getnextdata) {
    //2s
//     setTimeout(() => {
//         console.log('data', dataid);
//         if (getnextdata) {
//             getnextdata();
//         }  
//     }

//     ,2000)
// }
// getdata(1, ()=>{
//     getdata(2,()=>{
//         getdata(3);
//     });
// })










