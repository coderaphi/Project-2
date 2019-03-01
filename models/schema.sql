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
  Size VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO inventory (Dog_name, Gender, Breed, Age, Vaccinated, Adapted, size)
VALUES ('Peter','Male', 'Mutt',10,'yes','No', 'small');

INSERT INTO inventory (Dog_name, Gender, Breed, Age, Vaccinated, Adapted, size)
VALUES ('Toya','Female','German Shepherd', 1 ,'yes','No','large');

INSERT INTO inventory (Dog_name, Gender, Breed, Age, Vaccinated, Adapted, size)
VALUES ('Dash','Male','Doberman', 2 ,'yes','No','large');

INSERT INTO inventory (Dog_name, Gender, Breed, Age, Vaccinated, Adapted, size)
VALUES ('Arrow','Female','Mutt', 1 ,'yes','No','small');

INSERT INTO inventory (Dog_name, Gender, Breed, Age, Vaccinated, Adapted, size)
VALUES ('Lance','Male','Basset Hound', 2 ,'yes','No','small');

INSERT INTO inventory (Dog_name, Gender, Breed, Age, Vaccinated, Adapted, size)
VALUES ('Terpo','Female','Mutt', 1 ,'yes','No','small');

INSERT INTO inventory (Dog_name, Gender, Breed, Age, Vaccinated, Adapted, size)
VALUES ('Terry','Male','American Foxhound', 3 ,'yes','No','medium');

INSERT INTO inventory (Dog_name, Gender, Breed, Age, Vaccinated, Adapted, size)
VALUES ('Rusty','Male','Beagle', 5 ,'No','No','small');

INSERT INTO inventory (Dog_name, Gender, Breed, Age, Vaccinated, Adapted, size)
VALUES ('Jock','Female','Mutt', 3 ,'yes','No','medium');
