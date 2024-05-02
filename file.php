<?php
// Get the form data
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

// Set your email ID as the recipient
$to = "everythingelseisrighthere@gmail.com";

// Set the subject and the body of the email
$subject = "Contact Form Submission";
$body = "Name: $name\nEmail: $email\nMessage: $message";

// Send the email using the mail function
if (mail($to, $subject, $body)) {
  echo "Your message has been sent successfully.";
} else {
  echo "There was an error sending your message.";
}
?>