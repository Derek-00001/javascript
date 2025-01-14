// PROTOTYPES ? 
// A javascript object is an entity having state & behaviour(properties and methods)
// here properties = some variables and methods = some functions. 
// all js objects have special property called prototype.
// we can set prototype using __proto__

// Let's set a prototype 
const emplpyee = {
    calcTax() {
        console.log('The tax rate is 10%');
    }
}
 const aman = {
    salary:5000, 
 }
// for setting prototype we use this 
aman.__proto__ = emplpyee; // iska mtlb ye hai ki ham employee object ke function ko 
// aman object me as a prototype set and use krna chahte hai 

// NOTE -  If object and prototype have same method (function)
// object's method will be treated as first priority and will be used 

// create a object in js 

const me = {
//     direct way to create object
 // let's make some properties and methods 
    fullname : "Deepak",
    age: 22,
    printMarks: function () {
        console.log("age = ",this.age); // here this keyword is used which means iss object ki age. In simple words we're writing me.age ....both will work 
    }
} 

// // Classes in JS 
// Class is a program-code template for creating objects.
// those objects will have some state(variables/properties) and some behvaiour(function/method) in it. 
// syntax 
// class classname {
//     mymethod(){...}
//     constructor(){...} 
// } 
// create a class for toyota car 

class toyotacar{
    constructor(brand,mileage){
        console.log('creating new object');
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log('start the car');
    }
    
    stop(){
        console.log('stop the car');
    }
    // setBrand(brand){
    //     this.brandName = brand;
    // note- here if we write this.brand = brand then both will work the same 
    // }
}

// here we made a class named toyotacar NOW,
// If we want to create object from class, the syntax is 
//  let objectname = new classname();  
let fortuner = new toyotacar('fortunerbytoyota',20); // consntructor
console.log(fortuner);
// to set brandname we do
// fortuner.setBrand("fortunerbytoyota");
let lexus = new toyotacar('lexusbytoyota',10); // consntructor
console.log(lexus);
// lexus.setBrand("lexusbytoyota");

// Constructor ?
// it is a special method in js 
// it is automatically invoked by new keyword but we can create our own custom constructor.

// INHERITANCE IN JS 
// inheritance is passing down properties and methods from parent class to child class.
// for inheritance we use a keyword called extends. for exmaple 
class parent {
hello(){
    console.log('hello!');
}
}
class child extends parent {}
let obj = new child();
// If child and parent have same method, child's method will be used. this concept is known as method overriding.

// // SUPER KEYWORD 
// This keyword is used to call the constructor of its parent class to access the parent's properties and methods. In other words kayi baar hamare pass aisi situations hoti hai ki hame child class se parent class ke constructor ko access krna padta hai uss case me ye kaam aata hai 

// NOTE - in programming language child class also known as derived class 

class person {
    constructor(){
        console.log('enter parent constructor');
        this.species = 'homosapiens';
    }
    eat(){
        console.log('eat');
    }
}

class engineer extends person{
    constructor(branch){
        console.log('enter child constructor');
        super(); // to invoke parent class constructor
     // note - generally hame this keyword ya exit krne se pehle hi super() ko use krna hota hai.   
        this.branch = branch;
        console.log('exit child constructor');
    }
 // if we want to invoke eat method of parent class we use super.method();   
    work () {
        super.eat();
        console.log('solve problems, build something');
    }
}
let engobj = new engineer('computer science');
// LET'S PRACTICE 
// Q1. you are creating a website for your college, create a class user with 2 properties(name and email). It also has a method called viewdata() that allows users to view website Data. 

let data = 'this is your credentials';
class user {
    constructor(name,email){
    this.name = name;
    this.email = email;
    }
    viewdata(){
        console.log(data,'data');
    }
}
let student1 = new user('john','john@email.com');
let student2 = new user('jolly','jly@gmail.com');

// Q2. create a new class called admin which inherits from user. Add a new method called editdata to admin that allows it to edit website data.

class admin extends user {
    constructor(name,email){
        super(name,email);
        // MOST IMP. - jab bhi ham child class ke constructor me koi value pass krte hai then hame parents ke constructor ko call krna padta hai or unhe call krne ke liye hame super() keyword me vo value pass krni padti hai , in that case vo value hai name and email 
    } 
    editdata (){
        data = "some new value";
    }
}
let admin1 = new admin('xyz','xzy@gmail.com');

// ERROR HANDLING(try-catch)

try{
    // normal code
}catch (err){//err is error object 
// ...handling error  
}




















