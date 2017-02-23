<?php
require_once("db.php");
if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}else{
	foreach ($_REQUEST as $key => $value) {
		//防止js注入
		$_REQUEST[$key]=addslashes(htmlspecialchars($value));
	}
	$newid = $_REQUEST["id"];
	$newtitle = $_REQUEST["newtitle"];
	$newtype = $_REQUEST["newtype"];
	$newimg = $_REQUEST["newimg"];
	$newtime = $_REQUEST["newtime"];
	$newsrc = $_REQUEST["newsrc"];

	$sql = "UPDATE news SET newtype='{$newtype}',newtitle='{$newtitle}', 
	newsrc='{$newsrc}',newimg='{$newimg}',newtime='{$newtime}'
	 WHERE id={$newid}";
	if ($conn->query($sql) === TRUE) {
		echo json_encode("修改成功");
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	$conn->close();
}
?>