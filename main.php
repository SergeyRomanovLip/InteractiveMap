<?php
include ('config.php');

$id_room = $_POST['room'];

$link = mysqli_connect($host, $user, $pswd, $database);
$query = "SELECT * FROM rooms,roomowners WHERE room_id = '$id_room' AND id_of_owner = owner_id";
$result = mysqli_query($link, $query) or die(mysqli_error($link));
for ($data = []; $row = mysqli_fetch_assoc($result); $data[] = $row);


$result = '';
			foreach ($data as $elem) {
			$result .= '<tr>';
			$result .= '<td><strong>' . 'Ответственный' . '</strong></td>';
			$result .= '<td>' . $elem['owner_last'] . ' ' . $elem['owner_first'] .' '. $elem['owner_subname'] .', '. $elem['position'] . '</td>';
			$result .= '<tr>'; 
			$result .= '<td><strong>' . 'Наименование помещения' . '</strong></td>';		
			$result .= '<td>' . $elem['room_description'] . ', №' . $elem['room_number'] . '</td>';
			$result .= '</tr>';
		}
		echo json_encode($result);
?>




