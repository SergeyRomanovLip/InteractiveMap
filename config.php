	<?php
		$_GET[id];
		$id_room = ($_GET[id]);

		$host='192.168.0.11';
		$user='root';
		$pswd='';
		$database='interactivemap';

		$link = mysqli_connect($host, $user, $pswd, $database);
	?>