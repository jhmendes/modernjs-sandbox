// require ('ezhttp.js');

const http = new easyHTTP;

//Get Posts;

// http.get('https://jsonplaceholder.typicode.com/posts', function (err, response) {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(response);
//   }
// });

//Get a single post

// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(post);
//   }
// });

//Create data

const data = {
  title: 'Custom post',
  body: 'This is a test post!!!'
}


//Create a post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err) {
//         console.log(err)
//       } else {
//         console.log(post);
//       }
// });

//Update a post 

// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post) {
//   if(err) {
//         console.log(err)
//       } else {
//         console.log(post);
//       }
// });

//Delete a post 


http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
  if(err) {
    console.log(err)
  } else {
    console.log(response);
  }
});