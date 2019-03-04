<?php
    $name = $POST['name'];
    $email = $POST['email'];
    $message = $POST['message'];

    $email_from = 'HackYourFuture Site';
    $email_subject = 'New Message from';
    $email_body = "Name: $name.\n".
                  "Email: $email.\n".
                  "Message: $message.\n";

    $to ="saad.ahmed17@gmail.com";
    $header = "From: $email_from \r\n";
    $header = "Reply-To: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("location: index.html");

?> 