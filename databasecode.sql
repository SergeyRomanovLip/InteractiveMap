CREATE TABLE roomOwners (
	owner_id int(11) AUTO_INCREMENT PRIMARY KEY not null,
	owner_first varchar(256) not null,
	owner_last varchar(256) not null,
	room_number varchar(256) not null,
	equipment_list varchar(256) not null,
	room_desript varchar(256) not null,
	)

INSERT INTO users (user_first, user_last, user_email, user_uid, user_pwd)
	VALUES ('Daniel', 'Nielsen', 'usemmtuts@gmail.com', 'Admin', 'test123')