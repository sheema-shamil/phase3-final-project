// Select the form and the login button
const form = document.querySelector('form');
const loginBtn = document.querySelector('#login');

// Add a click event listener to the login button
loginBtn.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the form from submitting
  
  // Get the values of the username and password inputs
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  
  // Check if the username and password are valid
  if (username === 'myusername' && password === 'mypassword') {
    alert('Login successful!');
    // Redirect to the meme generator page
    window.location.href = 'meme-generator.html';
  } else {
    alert('Invalid username or password');
  }
});
