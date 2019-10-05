// async function myFunc() {

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('hello!'), 1000)
//   });

//   const error = true;


//   if(!error) {

//     const res = await promise; //waits until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrng'));
//   }


// }

// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err));



async function getUsers() {
  
  //await response from fetch call 
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  //only proceed once the promise is resolved
  const data = await response.json();

  //only proceed once the promise is resolved
  return data;
}

getUsers()
.then(res => console.log(res));
