CREATE DATABASE reminder;
use reminder; CREATE TABLE user (UserId int NOT NULL AUTO_INCREMENT, username varchar(255) NOT NULL, PRIMARY KEY(UserId));
use reminder; CREATE TABLE items (ItemId int NOT NULL AUTO_INCREMENT, description varchar(255) NOT NULL, completed BOOLEAN,  UserId int, PRIMARY KEY(ItemId), FOREIGN KEY (UserId) REFERENCES user(UserId));
INSERT INTO user (username) VALUES ("susan@bbc.co.uk");
INSERT INTO user (username) VALUES ("geoff@bbc.co.uk");
INSERT INTO items (description, completed, UserId) VALUES ("Learn Javascrpt", false, 2);
INSERT INTO items (description, completed, UserId) VALUES ("Learn MySQL", false, 2);
INSERT INTO items (description, completed, UserId) VALUES ("Learn NodeJS", false, 1);
SELECT * FROM items WHERE UserId = 2;
SELECT * FROM items WHERE UserId = 1;
UPDATE items SET completed = true WHERE ItemId = 1;
SELECT * FROM items WHERE UserId = 2;
SELECT * FROM items WHERE UserId = 2 AND completed = false;





