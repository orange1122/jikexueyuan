<?php
require_once("db.php");
if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}else{
	foreach ($_REQUEST as $key => $value) {
		//防止js注入
		$_REQUEST[$key]=addslashes(htmlspecialchars($value));
	}
		//插入新闻
	$newtitle = $_REQUEST["newtitle"];
	$newtype = $_REQUEST["newtype"];
	$newimg = $_REQUEST["newimg"];
	$newtime = $_REQUEST["newtime"];
	$newsrc = $_REQUEST["newsrc"];

	$sql = "INSERT INTO news (newtype, newtitle, newsrc,newimg,newtime)
	VALUES ('".$newtype."', '".$newtitle."',
	 '".$newsrc."','".$newimg."','".$newtime."')";

	if ($conn->query($sql) === TRUE) {
		echo json_encode("新记录插入成功");
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$conn->close();
}
?>