DROP DATABASE IF EXISTS catsitterDB;
CREATE database catsitterDB;
USE catsitterDB;

CREATE TABLE sitters(
name varchar(50),
phone integer(10),
email varchar(10),
address varchar(50),

PRIMARY KEY (name)
);
select * from catsitterDB.sitters

use catsitterDB;