const http = new EasyHTTP;

//Get Users
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));

//User Data 

const data = {
  name: 'John',
  username: 'jhmendes',
  email: 'johnmendes@'
}

//Create Post

http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err));

//Update Post


//Create Post

// http.put('https://jsonplaceholder.typicode.com/users/2 ', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

//Delete a post



// http.delete('https://jsonplaceholder.typicode.com/users/2')
// .then(data => console.log(data))
// .catch(err => console.log(err));