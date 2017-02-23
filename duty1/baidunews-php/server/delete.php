<?php
require_once("db.php");
if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}else{
	$newid = $_REQUEST["newid"];
	$sql ="DELETE FROM news WHERE id='".$newid."'";
	// mysqli_query($con,$sql);
	if ($conn->query($sql) === TRUE) {
		echo json_encode("删除成功");
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	$conn->close();
}


?>