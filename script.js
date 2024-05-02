// A function to send the contact form data using AJAX
function sendFormData() {
  // Get the form element
  var form = document.getElementById("contact-form");
  // Create a new FormData object
  var formData = new FormData(form);
  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();
  // Set the request method and the action URL
  xhr.open("POST", "file.php");
  // Set the onload function to handle the response
  xhr.onload = function() {
    // Check if the status is 200 (OK)
    if (xhr.status === 200) {
      // Display the response text
      alert(xhr.responseText);
    }
    else {
      // Display an error message
      alert("An error occurred: " + xhr.status);
    }
  };
  // Send the form data
  xhr.send(formData);
}

// Modify the validateForm function to call the sendFormData function
function validateForm() {
  var name = document.forms["contact-form"]["name"];
  var email = document.forms["contact-form"]["email"];
  var message = document.forms["contact-form"]["message"];
  if (name.value == "") {
    document.getElementById('errorname').innerHTML="Please enter a valid name";
    name.focus();
    return false;
  }else{
    document.getElementById('errorname').innerHTML="";
  }
  if (email.value == "") {
    document.getElementById('erroremail').innerHTML="Please enter a valid email address";
    email.focus();
    return false;
  }else{
    document.getElementById('erroremail').innerHTML="";
  }
  if (email.value.indexOf("@", 0) < 0) {
    document.getElementById('erroremail').innerHTML="Please enter a valid email address";
    email.focus();
    return false;
  }
  if (email.value.indexOf(".", 0) < 0) {
    document.getElementById('erroremail').innerHTML="Please enter a valid email address";
    email.focus();
    return false;
  }
  if (message.value == "") {
    document.getElementById('errormsg').innerHTML="Please enter a valid message";
    message.focus();
    return false;
  }else{
    document.getElementById('errormsg').innerHTML="";
  }
  // Call the sendFormData function
  sendFormData();
  // Prevent the default form submission
  return false;
}
