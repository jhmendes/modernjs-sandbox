document.querySelector('.get-jokes').addEventListener('click', getJokes);


function getJokes(e) {
 
  const number = document.querySelector('input[type="number"]').value;
  console.log(number);

  const xhr = new XMLHttpRequest();


  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200 ) {
      const response = JSON.parse(this.responseText);
      // console.log(response);

        if(response.type === 'success') {

          //Array of Joke objects
          const jokes = response.value;
          console.log(jokes);


          let output = '';
          jokes.forEach(function(joke) {
            //joke is an object
            output += `<li>${joke.joke}</li>`;
          });
        } else {
          output += 'Chuck Norris stopped your AJAX request';
        }
        document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();
  e.preventDefault();
}