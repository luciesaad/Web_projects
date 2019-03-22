<?php

$connection = mysqli_connect("localhost", "root", "", "grupp4") or die("Could not connect");
mysqli_select_db($connection, "grupp4") or die ("Could not select database");



if ($_SERVER["REQUEST_METHOD"] == "POST") {


    $sql = "INSERT INTO subscribe (Email)
        VALUES (?)";
$stmt = mysqli_prepare($connection, $sql);
$stmt->bind_param("s", $_POST['subscriberEmail']);
$stmt->execute();

}

$connection->close();
