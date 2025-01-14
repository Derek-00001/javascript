// DOM manipulation
// let clas = document.getElementsByClassName('container');
// how to manipulate background color ? 
// clas[0].style.background = "yellow";
// clas[1].style.background = "red";
// console.log(clas);
// how to add a class text and manipulate it ?
// clas[0].classList.add("bg-primary");
// console.log(clas);
// how to remove a class text and manipulate it ?
// clas[0].classList.remove("bg-primary"); 


// DOM BY APNA COLLEGE 

// console.dir(window.document.body);
// console.log(document.body);
// console.dir() is it used to print document in console 

// HOW TO ACCESS ELEMENTS 
// 1. Selecting with id 
// document.getElementById("id")

// let header=document.getElementById('heading');
// console.log(header); 

// 2. Selecting with class 
// document.getElementByClassName("class")

// let foot = document.getElementsByClassName('footer');
// console.log(foot);

// 3. selecting with tagname 
// document.getElementByTagName('p')

// let it = document.getElementsByTagName('button');
// console.log(it);

// QUERY SELECTOR 
// 4. document.querySelector('id/class/tag')
// it returns first elemennt 

// let para = document.querySelector("p");
// console.log(para);

// here if we notice we have 2 p tag in dom.html and it returns us 
// the first written p tag 

// 5. document.querySelectorAll('id/class/tag')
// it returns a NodeList 

// let all = document.querySelectorAll('.footered');
// console.log(all);

 //DOM manipulation 
//1.Tagname - returns tag for element nodes.
//2.innerText - returns the text context of the element & all its children.
//3.innerHTML - returns the plain text or HTML contents in the elements.

// let text = document.querySelector('div').innerHTML="<i>developer</i>";
// console.log(text);
//4.textContent- returns textual content even for hiddden elements. 

// PRACTICE 
// Q1. 
// let h2= document.querySelector('h2');
// h2.innerText= h2.innerText + "  from millionaire derek";
// console.log(h2);
//  Q1 ends

// Q2
  let divs = document.querySelectorAll('.box');
  console.log(divs);
//  how to select a single Element from a group ? like this champ 
console.log(divs[0]);
divs[0].innerText += " good";
divs[1].innerText += " best";
divs[2].innerText += " better ";


// Q2 ends















