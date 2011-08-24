<?php
	$email= $_REQUEST['email'];
	$message= $_REQUEST['message'];
	$name= $_REQUEST['name'];

	mail("YourEmail@gmail.com", $name, $message, "From: $email" );
	header( 'Location: http://www.cse.unr.edu/~YourUserName/mailsent.html');
?>
