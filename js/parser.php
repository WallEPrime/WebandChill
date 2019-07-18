<?php

if( isset ($_POST['name']) && isset ($_POST['surname']) && isset ($_POST['email']) && isset ($_POST['message']) ) {

$name = $_POST[ 'name' ];
$surname = $_POST[ 'surname'];
$email = $_POST ['email'];
$mesaj = $_POST ['message'];
$to = "petreadvalentin@gmail.com";
$from = $name;
$subject = 'Contact Form from petreadvalentin.com';
$messagemail = '<b>Name</b>'.$name.'<br>'.$surname.'<br>'.$email.'<br><p>'.$mesaj.'</p>';
$headers = "From: $from\n";
$headers = "MIME-Version: 1.0\n";
$headers = "Content-type: text/html; charset=iso-8859-1\n";
if(mail($to, $subject,$messagemail,$headers) ) {
    echo "success";
} else {
    echo "The server has failed to send the message";
}

}



?>