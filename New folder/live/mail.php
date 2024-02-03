<?php

/* =====================================================
 * change this to the email you want the form to send to
 * ===================================================== */
$email_to = "vbbachhav98@gmail.com"; 
$email_from = "vbbachhav98@gmail.com"; // must be different than $email_from 
$email_subject = "Contact Form submitted";

if(isset($_POST['submit']))
{


    

    // form field values
    $name = $_POST['name']; // required
    $email = $_POST['email']; // required
    $subject = $_POST['subject']; // required
    $message = $_POST['message']; // required



    // prepare email message
    $email_message = "Form details below.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Subject: ".clean_string($subject)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";

    // create email headers
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    if (@mail($email_to, $email_subject, $email_message, $headers))
    {
       // echo json_encode(array('success'=>1, 'message'=>'Form submitted successfully.'));
        echo "<script>alert('Form submitted successfully.')</script>";
        echo "<script language='javascript' type='text/javascript'>location.href='contact.html' </script>";  
    }

    else 
    {
        echo json_encode(array('success'=>0, 'message'=>'An error occured. Please try again later.'));
         echo "<script>alert('An error occured. Please try again later.')</script>";  
        die();        
    }
}
?>