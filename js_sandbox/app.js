/********** DOM **********/
/*
let val;
//gives you the whole document in a HTML Collection - array like object
val = document;
val = document.all;
val = document.all[9];
//counts all elements
val = document.all.length;
//access all types of properties of the document
val = document.head;
val = document.body;
val = document.domain;
val = document.characterSet;
val = document.URL;
val = document.contentType;

//access specific forms
val = document.forms;

val = document.forms[0].id;
//Get action and method of form
val = document.forms[0].method;
val = document.forms[0].action;

//HTML collection of links
val = document.links;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;

val = document.scripts[2].getAttribute('src');

//TURN HTML COLLECTION INTO AN ARRAY
let scripts = document.scripts;

let scriptsArray = Array.from(scripts);
scriptsArray.forEach((script) => {
  console.log(script);
});
console.log(window);
console.log(document); 
console.log(val); 

*/





/********** DOM Selectors **********/
/*

//Single element selector 

const taskTitle = document.getElementById('task-title');

 console.log(taskTitle);
 //get things from the element
 console.log(document.getElementById('task-title').id);

 document.getElementById('task-title').style.background = 'red';
 document.getElementById('task-title').style.color = '#fff';
 document.getElementById('task-title').style.padding = '10px 20px';

//Change Content


 console.log(document.getElementById('task-title').textContent = 'Task List');
 console.log(document.getElementById('task-title').innerText = 'My Tasks');
 console.log(document.getElementById('task-title').innerHTML = '<span style="color: blue">My Tasks</span>');
 console.log(document.getElementById('task-title').innerText = 'My Tasks');

 //Query Selector - you can use ANY CSS Selector****

 const taskTitle = document.querySelector('#task-title');
 const cardTitle = document.querySelector('.card-title');
 const header = document.querySelector('h5');

 console.log(taskTitle, cardTitle, header);
 console.table(taskTitle, cardTitle, header);

//Query selector will select the first one it finds even if theres more
const listItems = document.querySelector('li');
listItems.style.color = 'red';

const specialItem = document.querySelector('li:nth-child(3)');
specialItem.style.background = 'green';
specialItem.textContent = 'I changed my text!';



const items = document.getElementsByClassName('collection-item');
console.log(items);

console.log(items[3]);

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

let lis = document.getElementsByTagName('li');
console.log(lis);

//Convert HTML Collection into Array

lis = Array.from(lis);
lis.forEach( (e) => alert(e));
console.log(lis);

//Query selector all  - RETURNS A NODE LIST

const items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items);

const liOdd = document.querySelectorAll('li:nth-child(odd)');

console.log(liOdd);

liOdd.forEach( (li, index) => {
  li.style.background = 'orangered';
  li.prepend(`${index}: `);
});

*/



/********** DOM Traversal **********/

let val; 
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;


//Get the child nodes - this grabs ANY type of node - returns node list
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;



//1 - Element Node
//2 - Attribute (deprecated)
//3 - Text node
//8 - Comment 
//9 - Document itself
//10 - Doctype


//Get childen ELEMENT nodes - HTML Collection
val = list.children;
val = list.children[0];
val = list.children[0].textContent = 'Testing';

//Children of Children

val = list.children[3].children;
val = list.children[3].children[0].id = 'test-link';

val = list.firstChild; //any node
val = list.firstElementChild; //first element node

val = list.lastChild; //any node
val = list.lastElementChild; //last element node

//Count child elements
val = list.childElementCount;



//Get parent node 

val = listItem.parentNode;
val = listItem.parentElement;

//Get parents of parents

val = listItem.parentElement.parentElement;

//Get next sibiling

val = listItem.nextSibling; //returns any type of node 
val = listItem.nextElementSibling; // returns next element node


//Get previous sibiling
val = listItem.previousSibling; //returns any type of node;
val = listItem.previousElementSibling; // returns previous element node - this is null because there isn't a element node before the first list item


console.log(val);
console.dir(val);