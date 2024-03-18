// Get the form element
const registerForm = document.getElementById('register-form');

// Set the URL for the AJAX request
const url = 'http://localhost:3000/register'; 

// Set the request headers
const headers = {
    'Content-Type': 'application/json'
};

// Add an event listener for form submission
registerForm.addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();
  
    // Get the form data
    const formData = new FormData(registerForm);
  
    // Convert the form data to a JSON object
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    const jsonData = JSON.stringify(data);
  
    // Send an AJAX request to the server
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
  
    // Set the request headers
    for (const header in headers) {
        xhr.setRequestHeader(header, headers[header]);
    }
  
    xhr.onload = function() {
      // Handle the response from the server
      if (xhr.status === 200) {
          alert('Registration Successful!');
          window.location.href = '../index.html';
        // Redirect the user to a new page or update the UI as needed
      } else {
          const errorMSG = document.getElementById('error');
          errorMSG.innerHTML = "Registration Failed";
      }
    };
    xhr.send(jsonData);
  });