<?php
require_once("db.php");
if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}else{
	$newid = $_REQUEST["newid"];
	$sql = "select * from news where id={$newid}";
	$result = $conn->query($sql);
	$senddata = array();
	if ($result->num_rows > 0) {
    // 输出每行数据
		while($row = $result->fetch_assoc()) {
			array_push($senddata, array(
				'id'=>$row['id'],
				'newtype'=>htmlspecialchars_decode($row['newtype']),
				'newtitle'=>htmlspecialchars_decode($row['newtitle']),
				'newimg'=>htmlspecialchars_decode($row['newimg']),
				'newtime'=>htmlspecialchars_decode($row['newtime']),
				'newsrc'=>htmlspecialchars_decode($row['newsrc']),
				));
		}
		echo json_encode($senddata);
	} else {
		echo json_encode(array('success'=>'none'));
		// echo "0个结果"; 
	}
	$conn->close();
}
?>