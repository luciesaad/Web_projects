<?php

$connection = mysqli_connect("localhost", "root", "", "grupp4");
mysqli_select_db($connection, "grupp4") or die ("Could not select database");

$result = mysqli_query($connection, "SELECT * FROM news ORDER BY ArticleID DESC");

$data = array();
$data = array_reverse($data);
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

echo json_encode($data);


$connection->close();
