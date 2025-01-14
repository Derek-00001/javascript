// Event handling in Js 
// SYNTAX USING ARROW FUNCTION 
// Node.event = () => {
//     handle here
// }

// SYNTAX USING NORMAL FUNCTION 

// Node.event = function name(){
//     handle here 
// // }
// LET' EXPERIMENT WITH PREVIOUS INLINE EVENT

// NOTE - here Node refer to our Element(for example div , button, id/classname )
// and Event refer for attribute (for example onclick, onmouseover)
// SO  if we have to handle a event we'll write it as for example btn.onclick 

let btn1 = document.querySelector('#btn'); 

// btn1.onclick = () => {
//     console.log('it is clicked by event js');
// }
// NOTE - here if we put btn or btn1 with onclick, both will work perfectly 
btn.onclick = function name() {
    console.log('it is clicked by event js');
}
// here it worked using both syntax 
 
// EVENT OBJECT 
// It is a special object that has details about the event 
// All event handlers have access to the event object's properties and methods  
// It helps us finding many things about event like where event occur ,type of event(click,mouseover), its id/class name 
 // SYNTAX USING ARROW FUNCTION 
// Node.event = (e) => {
//     handle here
// }

// SYNTAX USING NORMAL FUNCTION 

// Node.event = function name(e){
//     handle here 
// // }

let button = document.querySelector('#btn1');
// button.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     // e.type tell the type of event 
//     console.log(e.target);
//     // e.target tells where event occour 
// }


// // EVENTLISTNER 
// // Syntax - Node.addEventlistner(event,callback)
// Syntax - Node.removeEventlistner(event,callback)
// NOTE - the callback reference should be same to remove

// here event(click , mouseover , etc) and callback will be a function 
// or ye event occur hone pe vo function execute ho jaayega 

button.addEventListener("click", function name(e){
    console.log('It was triggered by handler1');
    // console.log(e);
    // console.log(e.type);
})

button.addEventListener('click', (e) => {
    console.log('It was triggered by handler2');
    // console.log(e);
    // console.log(e.type);
})
 
// button.addEventListener("click", () => {
//     console.log('It was triggered by handler3');
// })

// IF we want to remove a eventlistener we can do 

// to do that 
// // first we have to store a function inside a variable
// then hame jo event delete krna hai uska addEventListener or removeEventListener ka 
// function reference same hona chahiye fir ham uss eventlistener ko delete kr sakte hai   
const handler3 = () => {
    console.log('It was triggered by handler3');
}

button.addEventListener("click",handler3);

button.removeEventListener("click",handler3);
// now we did IT 

// // LET'S PRACTICE 
// Create a toggle button that changes the screen to dark mode when clicked & light-mode when clicked again. 

let modebtn = document.querySelector('#mode');
let currmode = "light";
modebtn.addEventListener("click", ()=>{
    if(currmode=="light"){
    currmode="dark";
    document.querySelector('body').style.backgroundColor = "black";
    }
    else{
        currmode="light";
        document.querySelector('body').style.backgroundColor = "white";
    }
    console.log(currmode);
})


























