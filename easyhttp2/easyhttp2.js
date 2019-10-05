//Fetch version of EZHTTP

/**
 * Easy HTTP Library
 * Library for making http requests
 * 
 * @version 2.0.0
 * @author John Mendes
 * @license MIT
 * 
 */


class EasyHTTP {

  //GET Request
   get(url) {


    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
   
    }

      //POST Request

      post(url,data) {


        return new Promise((resolve, reject) => {
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err));
        });
       
        }

          //PUT Request

      delete(url) {


          return new Promise((resolve, reject) => {
            fetch(url, {
              method: 'DELETE',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(() => 'Resource deleted!')
            .catch(err => reject(err))
          });
        
        }

        //Delete request


 }