document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getAPI);


//Get local text file
function getText() {
  fetch('test.txt')
  .then(res => res.text())
  .then(data => {
    document.getElementById('output').innerHTML = data
  })
  .catch(err => console.log(err));
}


//Get local json data

function getJSON() {
  fetch('posts.json')
  .then(res => res.json())
  .then(data => {
    let output = '';
    data.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}

//Get API Data

function getAPI() {
  fetch('https://api.github.com/users')
  .then(res => res.json())
  .then(data => {
   console.log(data);

  let output = '';
  data.forEach(user => {
    output += `<li>${user.login}</li>`;
  });
  document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}