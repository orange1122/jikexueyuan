<?php
require_once("db.php");
// 检测连接
if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}else{
	mysqli_query($conn,"set names utf8");
	if(isset($_REQUEST["newtype"])){
		$newtype = $_REQUEST["newtype"];
		$sql = "select * from news where newtype='{$newtype}'";
		$result = $conn->query($sql);
		$senddata = array();
		if ($result->num_rows > 0) {
    // 输出每行数据
			while($row = $result->fetch_assoc()) {
				array_push($senddata, array(
					'id'=>$row['id'],
					'newtype'=>$row['newtype'],
					'newtitle'=>$row['newtitle'],
					'newimg'=>$row['newimg'],
					'newtime'=>$row['newtime'],
					'newsrc'=>$row['newsrc'],
					));
			}
			echo json_encode($senddata);
		}
	}else{
		mysqli_query($conn,"set names utf8");
		$sql = "select * from news order by id desc";
		$result = $conn->query($sql);
		$senddata = array();
		if ($result->num_rows > 0) {
    // 输出每行数据
			while($row = $result->fetch_assoc()) {
				array_push($senddata, array(
					'id'=>$row['id'],
					'newtype'=>$row['newtype'],
					'newtitle'=>$row['newtitle'],
					'newimg'=>$row['newimg'],
					'newtime'=>$row['newtime'],
					'newsrc'=>$row['newsrc'],
					));
			}
			echo json_encode($senddata);
		} else {
			echo json_encode(array('success'=>'none'));
		// echo "0个结果"; 
		}
	}
	
	$conn->close();

}





// echo json_encode($arr);
?>