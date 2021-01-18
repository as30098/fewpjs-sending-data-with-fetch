// Add your code here
// fetch(destinationURL, configurationObject);


//let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };

// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   });


function submitData(name, email) {
  // fetch(destinationURL, configurationObject);
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    // line 37 is turning the user input into a JSON string
    body: JSON.stringify({
      name,
      email
    })
  })
  //On a successful POST request, expect the server to respond with a [Response][response] object.
  .then(function(response) {
    return response.json();
  })
  //Just like we saw earlier in the dog example, the body property of this response will contain the data from the POST request along with a newly assigned id.
  //Use a then() call to access the Response object and use its built in json() method to parse the contents of the body property. 
  //Use a second then() to access this newly converted object. From this object, find the new id and append this value to the DOM.
  .then(function(object) {
    document.body.innerHTML = object['id']
  })
  .catch(function(error) {
    document.body.innerHTML = error.message
  });
}