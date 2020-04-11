// Функция запроса при нажатии на объект карты
function f(el) {
	for (let i = 1; i<36;i++){
	document.getElementById("room"+i).classList.remove('a');
	}
let room = (el.id);
let room_number = (parseInt(room.match(/\d+$/)[0], 10));
	document.getElementById("room"+room_number).classList.add('a');

	$("#containeer_left").fadeOut(100)
	
setTimeout(function () {
	 $.ajax({
        type: "POST",
        url: "http://interactivemap:81/main.php",
        data: {room:room_number},
		success: function(html){
		var res = JSON.parse(html);	
		$("#containeer_left").html(res);
		$("#containeer_left").fadeIn(200);
		}})
	},100);	
}

// Функция перещелкивания этажей
function d(el) {
	let floor = (el.id);
	document.getElementById('floor1').classList.remove('a-li');	
	document.getElementById('floor2').classList.remove('a-li');	
	document.getElementById(floor).classList.add('a-li');
}

// Функция поиска
function search(){
	let searcRes = document.getElementById('srch_bdy').value;
	
	//Скрипт изменения этажа
	let floor_num = searcRes.substring(0,1);
	let label = ("label"+floor_num);
	$("#"+label).click();
	document.getElementById('floor1').classList.remove('a-li');	
	document.getElementById('floor2').classList.remove('a-li');	
	document.getElementById('floor'+floor_num).classList.add('a-li');
	
	//Запрос в БД с номером помещения 
	document.getElementById('srch_bdy').value="";	
	 $.ajax({
        type: "POST",
        url: "http://interactivemap:81/search.php",
        data: {srch:searcRes},
		success: function(srch_compare){
		var res_search = JSON.parse(srch_compare);
	
			if (res_search == "") 
			alert('Такого помещения не существует') 
			
			for (let i = 1; i<36;i++){
			document.getElementById("room"+i).classList.remove('a');
			}
	// Запрос в БД с основной информацией
	document.getElementById("room"+res_search).classList.add('a');
	$("#containeer_left").fadeOut(100)
			 $.ajax({
				type: "POST",
				url: "http://interactivemap:81/main.php",
				data: {room:res_search},
				success: function(html){
				var res = JSON.parse(html);	
				$("#containeer_left").html(res);
				$("#containeer_left").fadeIn(200);
				}})
		}})		
	
}


// Парсинг нажатия на ENTER
document.onkeyup = function (e) {
        e = e || window.event;
        if (e.keyCode === 13) {
            search();
        }
        return false;
    }
