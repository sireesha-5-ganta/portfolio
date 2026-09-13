document.querySelector('button[type="submit"]').addEventListener('click', function (e) {
  e.preventDefault();

  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');
  var output = document.getElementById('output');

  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var message = messageInput.value.trim();

  // Name: only letters and spaces, at least 2 characters
  var namePattern = /^[A-Za-z ]{2,}$/;

  // Email: standard basic email pattern
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!namePattern.test(name)) {
    alert('Please enter a valid name (letters only, at least 2 characters).');
    return;
  }

  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (message.length < 5) {
    alert('Message should be at least 5 characters long.');
    return;
  }

  // Show the submitted details below the form
  output.innerHTML =
    '<h3>Message Received</h3>' +
    '<p><strong>Name:</strong> ' + name + '</p>' +
    '<p><strong>Email:</strong> ' + email + '</p>' +
    '<p><strong>Message:</strong> ' + message + '</p>';

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});