CREATE DATABASE reminder;
use reminder; CREATE TABLE user (userId int NOT NULL AUTO_INCREMENT, username varchar(255) NOT NULL, PRIMARY KEY(userId));
use reminder; CREATE TABLE items (itemId int NOT NULL AUTO_INCREMENT, itemDescription varchar(255) NOT NULL, completed BOOLEAN,  userId int, PRIMARY KEY(itemId), FOREIGN KEY (userId) REFERENCES user(userId));
INSERT INTO user (username) VALUES ("susan@bbc.co.uk");
INSERT INTO user (username) VALUES ("geoff@bbc.co.uk");
INSERT INTO items (itemDescription, completed, userId) VALUES ("Learn Javascrpt", false, 2);
INSERT INTO items (itemDescription, completed, userId) VALUES ("Learn MySQL", false, 2);
INSERT INTO items (itemDescription, completed, userId) VALUES ("Learn NodeJS", false, 1);
SELECT * FROM items WHERE userId = 2;
SELECT * FROM items WHERE userId = 1;
UPDATE items SET completed = true WHERE itemId = 1;
SELECT * FROM items WHERE userId = 2;
SELECT * FROM items WHERE userId = 2 AND completed = false;





