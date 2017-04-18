<?php
// Check for empty fields
if(empty($_POST['name'])) {
   echo "No arguments Provided!";
   return false;
}

$name = strip_tags(htmlspecialchars($_POST['name']));

$to = 'kulhanek.kuba@gmail.com';
$email_subject = "Svatba - potvrzení účasti";
$email_body = "<b>$name</b>\n\nPotvrdil účast na svatbě.";
$headers = "From: email@svatba.com\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
