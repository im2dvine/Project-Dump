CREATE SCHEMA recycleFinal;
USE recycleFinal;

create user
'capnPlanet'@'localhost'
identified by 'onebottleatatime';

Grant all privileges
on recycle.*
to 'capnPlanet'@'localhost';


CREATE TABLE materials (
id int auto_increment not null,
name varchar(50) not null,
_created timestamp default now(),
primary key (id)
);

create table county (
id int not null auto_increment,
name varchar(50) not null,
_created timestamp default now(),
primary key(id)
);


CREATE TABLE recycleCenters (
id INT  NOT NULL AUTO_INCREMENT,
    name VARCHAR(75) NOT NULL,
    addr VARCHAR(75) NOT NULL,
    hours VARCHAR(75) NOT NULL,
    countyid int not null,
-- materialsid int not null,
    _created TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id),
-- FOREIGN KEY (materialsid) REFERENCES materials(id),
    FOREIGN KEY (countyid) REFERENCES county(id)
);

create table centerMaterials (
centerid INT not null,
materialsid INT not null,
primary key(centerid, materialsid),
FOREIGN KEY (centerid) REFERENCES recycleCenters(id),
FOREIGN KEY (materialsid) REFERENCES materials(id)
);


Delimiter $$

-- --sp for getting accepted materials by centers.id
CREATE PROCEDURE spcenterMaterials (recycleCenters_id int)
BEGIN
select materials.id, materials.name from materials
join centerMaterials on centerMaterials.materialsid = materials.id
where centerMaterials.centerid = recycleCenters_id;
END $$
Delimiter ;

select * from materials;

DROP TABLE  county;


insert into materials (name)
values('Aluminum Cans'),
('Mixed Papers'),
('Metal Food Cans'),
('Plastics 1 & 2'),
('Plastics 1 - 7'),
('Batteries'),
('Scrap Metal'),
('Glass'),
('Electronics'),
('Cork'),
('Clothing/Textiles')
;


insert into county (name)
values('Jefferson'),
('Shelby')
;

SELECT * FROM county;


SELECT * from recycleCenters WHERE recycleCenters.id = 3;
CALL spcenterMaterials(3);

-- select * from recycleCenters rc
-- join materials m on m.id = rc.materialsid;

select * from recycleCenters rc
join county  c on c.id = rc.countyid;


insert into centerMaterials (centerid, materialsid)
values(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(2, 1),
(2, 2),
(2, 5),
(2, 3),
(3, 1),
(3, 2),
(3, 4),
(3, 3),
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(4, 6),
(4, 8),
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(5, 5),
(5, 9),
(6, 1),
(6, 2),
(6, 3),
(6, 4),
(6, 9),
(7, 1),
(7, 2),
(7, 3),
(7, 4),
(7, 7),
(7, 11),
(8, 1),
(8, 2),
(8, 3),
(8, 4),
(8, 10),
(8, 11),
(9, 1),
(9, 2),
(9, 3),
(9, 4),
(9, 7),
(9, 11),
(10, 1),
(10, 2),
(10, 3),
(10, 4),
(10, 7),
(10, 11),
(11, 1),
(11, 2),
(11, 3),
(11, 4),
(11, 10),
(11, 11),
(12, 1),
(12, 2),
(12, 3),
(12, 4),
(12, 10),
(12, 11),
(13, 1),
(13, 2),
(13, 3),
(13, 4),
(13, 7),
(13, 11),
(14, 1),
(14, 2),
(14, 3),
(14, 5),
(14, 7),
(15, 1),
(15, 2),
(15, 3),
(15, 5),
(15, 9),
(15, 11),
(16, 1),
(16, 2),
(16, 3),
(16, 5),
(16, 10),
(16, 11),
(17, 1),
(17, 2),
(17, 3),
(17, 4),
(17, 5),
(17, 7),
(18, 1),
(18, 2),
(18, 3),
(18, 5),
(18, 6),
(18, 7),
(18, 8);

insert into recycleCenters (name, addr, hours, countyid)
values('AEC Recycling Center Avondale','4330 1st Avenue South, Birmingham 35222','M-F 7:00am - 6:00pm, SS 8:00am - 5:00pm', 1);

insert into recycleCenters (name, addr, hours, countyid)
values('Remlap Recycling Center','14064 AL-75, Remlap, AL 35133','M-F 8:00am -7:00pm, SS 10:00am -5:00pm', 1);

insert into recycleCenters (name, addr, hours, countyid)
values('Bessemer North Recycling Center','1423 1st Ave N, Bessemer, AL 35020','M-F 10:00am - 5:00pm', 1 );

insert into recycleCenters (name, addr, hours, countyid)
values('Gardendale Recycling Center', '325 Main St, Gardendale, AL 35071','M-F 8:00am - 5:00pm, SS 10:00am - 3:00pm', 1);
       
insert into recycleCenters (name, addr, hours, countyid)
values('Adamsville Recycling Center','3608 Old Jasper Hwy, Adamsville, AL 35005','M-F 8:00am - 5:00pm, SS 10:00am - 3:00pm', 1);

insert into recycleCenters (name, addr, hours, countyid)
values('East Recycling Center','2920 41st St S, Birmingham, AL 35222','M-F 7:00am - 6:00pm, SS 8:00am - 5:00pm', 1);
       
insert into recycleCenters (name, addr, hours, countyid)
values('Irondale City Recycling ','1600 Montclair Rd, Birmingham, AL 35210','M-F 8:00am - 5:00pm, SS 10:00am - 3:00pm', 1);

insert into recycleCenters (name, addr, hours, countyid)
values('North Recycling Center','1933 Vanderbilt Rd, Birmingham, AL 35234','M-F 8:00am -7:00pm, SS 10:00am -5:00pm', 1);

insert into recycleCenters (name, addr, hours, countyid)
values('Leeds Recycling Center','8551 Whitfield Ave, Leeds, AL 35094','Hours: M-F 7:00am - 6:00pm, SS 8:00am - 5:00pm', 1);

insert into recycleCenters (name, addr, hours, countyid)
values('Bessemer West Recycling Center','1601 1st Ave N, Bessemer, AL 35020','M-F 8:00am - 5:00pm, SS 10:00am - 3:00pm', 1);


insert into recycleCenters (name, addr, hours, countyid)
values('Fairfield Recycling','7201 Aaron Aronov Dr, Fairfield, AL 35064','M-F 8:00am -7:00pm, SS 10:00am -5:00pm', 1);

insert into recycleCenters (name, addr, hours, countyid)
values('Pinson Recycling Center','6147 Sunrise Dr, Pinson, AL 35126','M-F 8:00am - 5:00pm, SS 10:00am - 3:00pm', 1);

insert into recycleCenters (name, addr, hours, countyid)
values('Cahaba Park Recycling Center','5458 Cahaba Valley Rd, Birmingham, AL 35242','M-F 7:00am - 6:00pm, SS 8:00am - 5:00pm', 2);

insert into recycleCenters (name, addr, hours, countyid)
values('Columbiana Recycling Center','20321 AL-25, Columbiana, AL 35051','M-F 8:00am -7:00pm, SS 10:00am -5:00pm', 2);

insert into recycleCenters (name, addr, hours, countyid)
values('Cropwell Recycling Center','7890 US-231, Cropwell, AL 35054','M-F 7:00am - 6:00pm, SS 8:00am - 5:00pm', 2);

insert into recycleCenters (name, addr, hours, countyid)
values('Pelham Recycling Center','656 Stuart Ln, Pelham, AL 35124','M-F 8:00am - 5:00pm, SS 10:00am - 3:00pm', 2);

insert into recycleCenters (name, addr, hours, countyid)
values('Montevallo Recycle Center','1120 Overland Rd, Montevallo, AL 35115',' M-F 8:00am -7:00pm, SS 10:00am -5:00pm', 2);

insert into recycleCenters (name, addr, hours, countyid)
values('Alabaster Recycling Center','22 Shady Acres Rd, Alabaster, AL 35007',' M-F 7:00am - 6:00pm, SS 8:00am - 5:00pm', 2);


select recycleCenters.id, recycleCenters.name, recycleCenters.addr, recycleCenters.hours  from recycleCenters;


select recycleCenters.id, recycleCenters.name, recycleCenters.addr, recycleCenters.hours, materials.name as materials from recycleCenters, materials;

SELECT recycleCenters.*, county.name FROM recycleCenters JOIN county ON county.id = recycleCenters.countyid;

SELECT recycleCenters.id, recycleCenters.name, recycleCenters.addr, recycleCenters.hours, county.name as county 
FROM recycleCenters 
JOIN county ON county.id = recycleCenters.countyid;

SELECT materials.id, materials.name
FROM materials;



select * from  materials;

select * from  centerMaterials;

select * from recycleCenters;


SELECT recycleCenters.id, recycleCenters.name, recycleCenters.addr, recycleCenters.hours, county.name as county FROM recycleCenters JOIN county ON county.id = recycleCenters.countyid;

CREATE TABLE Users(
id INT NOT NULL AUTO_INCREMENT,
name varchar(20) not null,
_created TIMESTAMP DEFAULT NOW(),
PRIMARY KEY (id)
);

CREATE TABLE Comments (
id INT NOT NULL AUTO_INCREMENT,
userid INT not null,
content varchar (50) not null,
_created TIMESTAMP DEFAULT NOW(),
PRIMARY KEY (id),
FOREIGN KEY (userid) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO Users (name) VALUES
('Batman'),
('Poison Ivy'),
('Harley Quinn'),
('Joker');

INSERT INTO Comments (userid, content) VALUES
(1, 'I AM BATMAN!'),
(2, 'Nature ALWAYS WINS!'),
(3, 'Puddin! Get your RECYCLE ON!'),
(4, 'Why SO SERIOUS?!'),
(1, 'Because this is serious! @Joker');



CREATE TABLE Mentions (
	commentid INT NOT NULL,
    userid INT NOT NULL,
    PRIMARY KEY (commentid, userid),
    FOREIGN KEY (userid) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (commentid) REFERENCES comments(id) ON DELETE CASCADE
);


INSERT INTO Mentions (commentid, userid) VALUE (5, 4);


select * from users;
select * from comments;
select * from Mentions;

select Comments.content, Users.name 
from Comments
join Users on Comments.userid = Users.id
where Comments.userid = "2";

SELECT
	Users.name,
    Comments.*
FROM Comments
JOIN Users ON Users.id = Comments.userid;

SELECT * FROM Users;
SELECT * FROM Comments;

SELECT * FROM recycleCenters;

INSERT INTO county(id, name) VALUES ('3', 'Tuscaloosa');

UPDATE recycleCenters SET name = 'Birmingham Recycling-Recovery', addr = '9 41st St S, Birmingam, AL 35222' WHERE (id = '1');
UPDATE recycleCenters SET hours = 'M-F 7:00am - 3:30pm' WHERE (id = '1');

UPDATE recycleCenters SET name = 'UAB Recycling Center', addr = '620 11th St S, Birmingham, AL 35233', hours = 'Monday + Thursday 7:00am - 9:00am, 4:00 - 5:30pm' WHERE (id = '2');

UPDATE recycleCenters SET name = 'Rather Recycling Center', addr = '323 Finley Blvd, Birmingham, AL 35204' WHERE (id = '3');
UPDATE recycleCenters SET hours = 'M-F 7:30am - 4:30pm, Sat 7:30am - 2:00pm' WHERE (id = '3');


UPDATE recycleCenters SET name = 'Protec Recycling', addr = '135 Distribution Dr, Homewood, AL 35209', hours = 'M-F 8:00am - 4:00pm' WHERE (id = '4');

UPDATE recycleCenters SET name = 'Advanced Technology Recycling', addr = '103D Shades Creek Cir, Birmingham, AL 35211', hours = 'M-F 7:30am - 4:00pm' WHERE (id = '5');

UPDATE recycleCenters SET name = 'Schnitzer Steel Industries, Inc', addr = '515 1st Ave N, Birmingham, AL 35204', hours = 'M-F 7:30am - 3:45pm, Sat 8:00am - 11:45am' WHERE (id = '6');

UPDATE recycleCenters SET name = 'CMC Recycling', addr = '3431 27th Ave N, Birmingham, AL 35207', hours = 'M-F 8:00am - 12:00pm, 12:30pm - 4:00pm' WHERE (id = '7');
UPDATE recycleCenters SET name = 'Standard Iron & Metal Inc', addr = '1933 Vanderbilt Rd, Birmingham, AL 35234', hours = 'M-F 7:30am - 4:00pm, Sat 7:30am - 12:00pm' WHERE (id = '8');


UPDATE recycleCenters SET name = 'SA Recycling', addr = '2020 Vanderbilt Rd, Birmingham, AL 35234', hours = 'M-F 7:30am - 3:45pm, Sat 7:00am - 12:00pm' WHERE (id = '9');

UPDATE recycleCenters SET name = 'Recycle USA, Inc.', addr = '6147 Sunrise Dr, Pinson, AL 35126', hours = 'M-F 8:0am - 4:15pm, Sat 8:00am - 11:00am' WHERE (id = '10');

UPDATE recycleCenters SET name = 'First Avenue Recycling Corporation', addr = '1423 1st Ave N, Bessemer, AL 35020', hours = 'M-F 7:00am - 4:00pm' WHERE (id = '11');

UPDATE recycleCenters SET name = 'Montevallo Recycling Center', addr = '1120 Overland Rd, Montevallo, AL 35115', hours = 'M-Sat 8:00am - 4:00pm', countyid = 2  WHERE (id = '12');

UPDATE recycleCenters SET name = 'Saginaw Recycling', addr = '22 Shady Acres Rd, Alabaster, AL 35007', hours = 'M-F 7:30am - 4:00pm, Sat 7:30am - 1:15pm', countyid = 2  WHERE (id = '13');

UPDATE recycleCenters SET name = 'Bessemer Recycling Center', addr = '1601 1st Ave N, Bessemer, AL 35020', hours = 'M-F 7:00am - 5:30pm', countyid = 1  WHERE (id = '14');


UPDATE recycleCenters SET name = 'Recycling Unlimited Inc.', addr = '20321 AL-25, Columbiana, AL 35051', hours = 'M-F 7:00am - 2:00pm', countyid = 2  WHERE (id = '15');


UPDATE recycleCenters SET name = 'UA Recycling Center', addr = '1115 14th St, Tuscaloosa, AL 35401', hours = 'M-F 8:00am - 4:00pm, Sat 8:00am - 12:00pm', countyid = 3  WHERE (id = '16');


UPDATE recycleCenters SET name = 'Richard A. Curry Environmental Complex', addr = '3440 Kauloosa Ave, Tuscaloosa, AL 35401', hours = 'M-F 8:00am - 5:00pm', countyid = 3  WHERE (id = '17');

UPDATE recycleCenters SET name = 'Liberty Recycling Center', addr = '2664 24th St, Tuscaloosa, AL 35401', hours = 'M-F 8:30am - 3:00pm', countyid = 3  WHERE (id = '18');

CREATE TABLE ContactForm (
id INT NOT NULL auto_increment,
name varchar(50) not null,
email varchar(50) not null,
content varchar(250) not null,
_created timestamp default now(),
PRIMARY KEY (id)
);

SELECT * FROM ContactForm;

SELECT * FROM centerMaterials;


select recycleCenters.name, recycleCenters.addr, recycleCenters.hours, recycleCenters.countyid 
from recycleCenters
join centermaterials on recycleCenters.id = centerid
where centerMaterials.materialsid = '10';

select recycleCenters.name, recycleCenters.addr, recycleCenters.hours, recycleCenters.countyid 
from recycleCenters
join centermaterials on recycleCenters.id = centerid
where centerMaterials.materialsid = "10";

Select * from materials;


Delimiter $$
-- --sp for getting accepted materials by centers.id
CREATE PROCEDURE spcenterMaterials (recycleCenters_id int)
BEGIN
select materials.id, materials.name from materials
join centerMaterials on centerMaterials.materialsid = materials.id
where centerMaterials.centerid = recycleCenters_id;
END $$
Delimiter ;
