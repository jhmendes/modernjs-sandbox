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

/*
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

*/

/********** DOM Creating Elements **********/

/*

//create element

const li = document.createElement('li');

//add a class

li.className = 'collection-item';

//add an id

li.id = 'new-item';

//add attribute 

li.setAttribute('title', 'New Item');

// Create text node and append it to the LI


li.appendChild(document.createTextNode('Hello World'));

//Create new link element 

const link = document.createElement('a');

//Add Class to the link 

link.className = 'delete-item secondary-content';

//Add Icon inside link

link.innerHTML = '<i class="fa fa-remove"></i>';


//Append link into li
li.appendChild(link);

//Append li as child to ul 

document.querySelector('ul.collection').appendChild(li);


console.log(li);

*/

/********** DOM Replace and Remove Elements **********/


/*
//Replacing elements

//create an element

const newHeading = document.createElement('h2');

newHeading.id = 'task-title';

newHeading.appendChild(document.createTextNode('Task list'));


//Get the old heading 

const oldHeading = document.getElementById('task-title');

//Get the parent of the old element

const cardAction = document.querySelector('.card-action');

cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);


//Removing elements

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove list item 

lis[0].remove();

//Remove child element

list.removeChild(lis[3]);



//CLASSES AND ATTRIBUTES***********Important!

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

//CLASSES
val = link.className;
val = link.classList;
val = link.classList[0];

//Add or remove classes
link.classList.add('test');
link.classList.remove('test');


val = link;



// Attributes  

val = link.getAttribute('href');
val = link.setAttribute('href','https://google.com');
val = link.hasAttribute('href');
link.setAttribute('title', 'Google');

//Remove attribute

link.removeAttribute('title');
val = link;
console.log(val);

*/

/********** Event Listeners and Event Object **********/

/*
//https://developer.mozilla.org/en-US/docs/Web/API/Event

// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//   e.preventDefault();
//   console.log('testing');
// });

//can accept a named function
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  // console.log('testing with a named function');
  let val;

  
  val = e;
  //Event Target element

  val = e.target;
  val = e.target.className;
  val = e.target.classList;
  val = e.target.innerText = 'Hello';

  //Event type
  val = e.type;

//Timestamp
  val = e.timeStamp;


//Coordinates relative to window

val = e.clientY;
val = e.clientX;

//Coordinates relative to element itself
val = e.offsetY;
val = e.offsetX;
  console.log(val);
}
*/

/********** Mouse Events **********/

/*
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//Click event

// clearBtn.addEventListener('click', runEvent);

//Double click 
clearBtn.addEventListener('dblclick', runEvent);

//Mousedown and Mouseup
clearBtn.addEventListener('mousedown', runEvent);
clearBtn.addEventListener('mouseup', runEvent);


//MouseEnter 
card.addEventListener('mouseenter', runEvent);

//Mouse leave 
card.addEventListener('mouseleave', runEvent);


//Mouse Over 
card.addEventListener('mouseover', runEvent);

//Mouse out

card.addEventListener('mouseout', runEvent);

//Mouse Move
card.addEventListener('mousemove', runEvent);


//Event Handler

function runEvent(e) {
  console.log(`Event Type ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

*/


/********** Keyboard Events  **********/
/*
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

//CLEAR THE INPUT VALUE
taskInput.value = '';

//Keydown
// taskInput.addEventListener('keydown', runEvent);

//Keyup
// taskInput.addEventListener('keyup', runEvent);

//Keypress
// taskInput.addEventListener('keypress', runEvent);

//Submit
// form.addEventListener('submit', runEvent);
//default behavior of form is to redirect to the href, must use preventDefault to stop this

//Focus - click into an input
// taskInput.addEventListener('focus', runEvent);

//Blur - click outside of an input
// taskInput.addEventListener('blur', runEvent);


//Cut 
// taskInput.addEventListener('cut', runEvent);
//Copy 
// taskInput.addEventListener('copy', runEvent);
//Paste 
// taskInput.addEventListener('paste', runEvent);


//Input event - this gets ANY input event
// taskInput.addEventListener('input', runEvent);

//Change event - mainly for select inputs - if it changes, this event fires
taskInput.addEventListener('change', runEvent);

function runEvent(e) {
  // e.preventDefault();

  //Get input value****
  // console.log(taskInput.value);

  console.log(`Event Type: ${e.type}`);
  // console.log(e.target.value);

  // heading.innerText = e.target.value;
}
*/
/********** Event Bubbling and Delegation  **********/

/*
//BUBBLE
 document.querySelector('.card-title').addEventListener('click', function(){
   console.log('Card Title');
 });

 document.querySelector('.card-content').addEventListener('click', function(){
  console.log('Card Content');
});

document.querySelector('.card').addEventListener('click', function(){
  console.log('Card');
});

document.querySelector('.col').addEventListener('click', function(){
  console.log('Col');
});


//DELEGATION

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('Item deleted');
  // }

  if(e.target.parentElement.classList.contains('delete-item')) {
    console.log('Item deleted');
    e.target.parentElement.parentElement.remove();
  }
}
*/

/********** Local and Session storage  **********/