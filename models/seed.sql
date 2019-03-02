DROP DATABASE IF EXISTS kinderpounddb;
CREATE DATABASE kinderpounddb;





USE kinderpounddb;

CREATE TABLE inventory(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  Dog_name VARCHAR(100) NOT NULL,
  Gender VARCHAR(45) NOT NULL,
  Breed VARCHAR(45) NOT NULL,
  Age INT default(10),
  Vaccinated VARCHAR(45) NOT NULL,
  Adapted VARCHAR(45) NOT NULL,
  Size VARCHAR(245) NOT NULL,
  photo VARCHAR(245) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO inventory (Dog_name, Gender, Breed, Age, Vaccinated, Adapted, size, photo)
VALUES ('Peter','Male', 'Mutt',10,'yes','No', 'small', 'https://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-30.jpg');

INSERT INTO inventory (Dog_name, Gender, Breed, Age, Vaccinated, Adapted, size, photo)
VALUES ('Toya','Female','German Shepherd', 1 ,'yes','No','large','https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/DSHwiki.jpg/400px-DSHwiki.jpg');

INSERT INTO inventory (Dog_name, Gender, Breed, Age, Vaccinated, Adapted, size, photo)
VALUES ('Dash','Male','Doberman', 2 ,'yes','No','large','https://www.dogster.com/wp-content/uploads/2014/06/A-Doberman-puppy.jpg');

INSERT INTO inventory (Dog_name, Gender, Breed, Age, Vaccinated, Adapted, size, photo)
VALUES ('Arrow','Female','Mutt', 1 ,'yes','No','small','https://1.bp.blogspot.com/-tLnZ0qb8nr8/TkzlUMyn87I/AAAAAAAAMp0/o8BSm17QIgg/s640/mutt+mixed+breed+dog+1.jpg');

INSERT INTO inventory (Dog_name, Gender, Breed, Age, Vaccinated, Adapted, size, photo)
VALUES ('Lance','Male','Basset Hound', 2 ,'yes','No','small','https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001052/Basset-Hound-MP.jpg');

INSERT INTO inventory (Dog_name, Gender, Breed, Age, Vaccinated, Adapted, size, photo)
VALUES ('Terpo','Female','Mutt', 1 ,'yes','No','small','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6aN858FQy7YRRU7byQIb4JgQllJ4-puhlDgwBAqTXkpAqfSu');

INSERT INTO inventory (Dog_name, Gender, Breed, Age, Vaccinated, Adapted, size, photo)
VALUES ('Terry','Male','American Foxhound', 3 ,'yes','No','medium','http://cdn.akc.org/content/article-body-image/AFH_Hero.jpg');

INSERT INTO inventory (Dog_name, Gender, Breed, Age, Vaccinated, Adapted, size, photo)
VALUES ('Rusty','Male','Beagle', 5 ,'No','No','small', 'https://t3.ftcdn.net/jpg/01/39/53/06/240_F_139530660_epllX5UbV2k7zidIuSTm0Qe3RnYWV8Q0.jpg');

INSERT INTO inventory (Dog_name, Gender, Breed, Age, Vaccinated, Adapted, size, photo)
VALUES ('Jock','Female','Mutt', 3 ,'yes','No','medium', 'https://premierpups.com/azure/affordablepup/pups/teacup-yorkshire-terrier---yorkie-puppies-for-sale-and-adopt-in-ohio-635908079855182484.png?preset=home');
