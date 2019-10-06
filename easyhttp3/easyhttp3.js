//Fetch version of EZHTTP

/**
 * Easy HTTP Library
 * Library for making http requests
 * 
 * @version 3.0.0
 * @author John Mendes
 * @license MIT
 * 
 */


class EasyHTTP {

  //GET Request
   async get(url) {
     const response = await fetch(url);
     const resData = await response.json();
     return resData;
  
    }

      //POST Request

    async post(url,data) {


        const response = await fetch(url, {
      
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
          });
          const resData = await response.json();
          return resData;
        }

          //PUT Request

        async  put(url, data) {


            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                  'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
              });
          const resData = await response.json();
          return resData;
          }

        //Delete request

      async  delete(url) {


          const response = await fetch(url, {
              method: 'DELETE',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify(data)
            })

            const resData = await 'Resource Deleted';
            return resData;
          }
        
        
 }