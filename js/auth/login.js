// Get the form element
const loginForm = document.getElementById('login-form');

// Set the URL for the AJAX request
const url = 'http://localhost:3000/login'; 
// https://javascript.info/xmlhttprequest
// Set the request headers
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
};

// Add an event listener for form submission
loginForm.addEventListener('submit', function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the form data
  const formData = new FormData(loginForm);

  // Encode the form data as URL-encoded string
  const encodedFormData = new URLSearchParams(formData).toString();

  // Send an AJAX request to the server
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  
  // Set the request headers
  Object.keys(headers).forEach(key => {
    xhr.setRequestHeader(key, headers[key]);
  });

  // https://stackoverflow.com/questions/33354877/javascript-xmlhttprequest-and-redirect
  xhr.onload = function() {
    // Handle the response from the server
    if (xhr.status === 200) {
        alert('Login Successful');
        window.location.href = '../index.html';
      // Redirect the user to a new page or update the UI as needed
    } else {
      const errorMSG = document.getElementById('error');
      errorMSG.innerHTML = "Login Failed! Username or Password Incorrect!";
    }
  };
  xhr.send(encodedFormData);
});