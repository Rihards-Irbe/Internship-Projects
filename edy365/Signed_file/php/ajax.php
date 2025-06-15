<?php

	$conn = new mysqli('localhost','root','','test2');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		
		$filename = $_POST['filename'];
		
		$signed = $_COOKIE['trueorfalse'];
		
		if($signed == 1){
			$test = true;
		}else if($signed == 0){
			$test = false;
		}
		
		$sql = "INSERT INTO file (file_name, file_signed) VALUES ('$filename', '$test');";
		mysqli_query($conn, $sql);
		
		$query = "SELECT * FROM file";
		
		$result = $conn->query($query);
		
		$data = [];
		while ($row = $result->fetch_assoc()) {
		$data[] = $row;
		}
		
		$dataString = json_encode($data);
		
		echo "<table>";
		echo "<tr>";
			foreach ($data[0] as $key => $value) {
		echo "<th>" . $key . "</th>";
		}
		echo "</tr>";
		
		foreach ($data as $row) {
			echo "<tr>";
			foreach ($row as $key => $value) {
			echo "<td>" . $value . "</td>";
		}
			echo "</tr>";
		}
			echo "</table>";
		
		//$SignedValue = $_POST['SignedValue'];
		//echo $SignedValue;
	
	}
	
?>