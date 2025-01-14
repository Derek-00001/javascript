
// here we're going to use getAttribute property. We have 

// 1.getAttribute(attr) - to get the attribute value
// Syntax - element.getAttribute(name) example below 
// 2.setAttribute(attr,value) - to set the Attribute value
// Syntax - element.setAttribute(name, value) 
 
   
// let div = document.querySelector('div');
// console.log(div);

// how to access attributes ? like this buddy...


// let id = div.getAttribute('id');
// console.log(id);

// let name = div.getAttribute('name');
// console.log(name);

// now to all at once

// let para = document.querySelector('p').getAttribute('class');
// console.log(para);

// note - we can write the above code as follows also..& get the same result.

// let par = document.querySelector('p');
// console.log(par.getAttribute('class'));

// setAttribute

// console.log(par.setAttribute('class','paro'));


// let h = document.querySelector('h3');
// console.log(h.setAttribute('class','footer'));

// THERE IS A SPECIAL ATTRIbUTE 

// Node.style (isme sirf Node ka name likhna hota hai like div,p,h1..etc. then style 
// aur isse hame uski styling mil jaati hai jisse ham apne according change kr sakte hai )

// let div = document.querySelector('div');
// console.log(div.style);


// div.style.color = 'aqua';
// div.style.backgroundColor = 'hotpink';

// Inserts Elements in DOM 


// Insert elements 

// 1. node.append(Element name without qoutes) - adds at the end of node(inside)

// 1. node.prepend(Element name without qoutes) - adds at the start of node(inside)

// 1. node.before(Element name without qoutes) - adds before the  node(outside)

// 1. node.after(Element name without qoutes) - adds after the  node(outside)

// Delete elements 

// 1.  node.remove() - remove the  node

// HOW to add new elements in DOM ? 
// Its a 2 step process 

// first - create the Element

// for creation we write 
// let element  = document.createElement('elementname like div, p ,etc');

// second - add the Element

// LET'S create a button and add it to the first div

let newbtn  = document.createElement('button');
newbtn.innerText = 'click me!';
console.log(newbtn);

let diva  = document.querySelector("div");
diva.append(newbtn);

// LET'S add a heading 

let newhead = document.createElement('h1');
newhead.innerHTML = "<i>HELLO, I'm the boss</i>";

document.querySelector('body').prepend(newhead);

// Deleting a node 

let del = document.querySelector('p');
del.remove();



















