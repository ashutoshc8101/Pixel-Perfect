<?php

// Retrieving data from ajax //

$fname = $_POST['fname'];
$femail = $_POST['femail'];
$fphone = $_POST['fph'];
$feed = $_POST['feed'];

// Creating Connection with Database //

$connection = new mysqli("localhost","root","MniKbianSK!","feedback");

if($connection -> connect_error){
  die("Connection failed: ".$connection->connect_error);
}

// Sql //

$sql = "INSERT INTO record(name,email,phone,feedback)
VALUES ('$fname','$femail','$fphone','$feed')";

if($connection->query($sql) === TRUE){
  echo "<div class='res-done'>Your valuable Feedback/Suggestion/Compliant has been Saved to our Database record</div>";
}else{
  echo "<div class='res-error'>Error: Something went wrong</div>";
}

// Finish //
?>
