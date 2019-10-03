const posts = [
  {title: 'post1', body: 'This is post 1!'},
  {title: 'post2', body: 'This is post 2!'}
];

// ES5 Callback version

// function createPost(post, callback) {
//   setTimeout(function() {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

//ES6 Promise version

function createPost(post) {

  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);

      const error = false;

      if(!error) {
        resolve();
      } else {
        reject('Error: Something went wrong!');
      }
    }, 2000);
  });
 
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post #3', body: 'This is post 3!!!'}).then(getPosts).catch(function(err) {
  console.log(err);
});

