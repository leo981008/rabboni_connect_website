sudo mysql -u situser -p  
pw=sit  
use sitdb;  
create table pointdb(  
   id INT NOT NULL AUTO_INCREMENT,  
   p1 INT(100) NOT NULL,  
   p2 INT(100) NOT NULL,  
   p3 INT(100) NOT NULL,  
   p4 INT(100) NOT NULL,  
   p5 INT(100) NOT NULL,  
   time INT(100) NOT NULL,  
   PRIMARY KEY ( id )  
);
  
  
flask run --host=0.0.0.0  
