<?php

$name = $_POST["name"];
$surname = $_POST["name"];
$email = $_POST["email"];
$tel = $_POST["tel"];
$message = $_POST["message"];

$mailheader = "From:".$name."<".$email.">/r/n";

$recipient = "info@nisancisoftware.com";

mail($recipient,$message,$mailheader)
or die ("Eror!")

echo "Talebiniz Alındı."

?>