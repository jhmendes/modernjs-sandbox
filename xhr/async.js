document.getElementById('button').addEventListener('click', loadData);

function loadData() {

  //create XHR object
  var xhr = new XMLHttpRequest();

  //Open a request 

  xhr.open('GET', 'data.txt', true);
  console.log(xhr.readyState);
  xhr.onload = function() {
    console.log(xhr.readyState);
   //response ok?
    if(this.status === 200) {
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  //Optional for spinners/loaders

  // xhr.onprogress = function() {
  //   console.log(xhr.readyState);
  // }

  // xhr.onreadystatechange = function() {
    // console.log(xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function() {
    console.log('Error!');
  }

  //send the request
  xhr.send();
}



//READY STATE VALUES
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.