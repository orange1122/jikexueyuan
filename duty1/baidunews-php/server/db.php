<?php
header("Content-type: application/json; charset=utf-8"); 

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "baidunews-php";
// 创建连接
$conn = mysqli_connect($servername, $username, $password,$dbname);
mysqli_query($conn,"set names utf8");
?>