<?php
include ('config.php');

$srch_res = $_POST['srch'];

$link = mysqli_connect($host, $user, $pswd, $database);
$query = "SELECT * FROM rooms WHERE room_number = '$srch_res'";
$result = mysqli_query($link, $query) or die(mysqli_error($link));
for ($data = []; $row = mysqli_fetch_assoc($result); $data[] = $row);


$result = '';
			foreach ($data as $elem) {
			$result .= $elem['room_id'];
		}
		echo json_encode($result);
?>




