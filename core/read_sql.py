# id will auto increase
# use nextc;
# CREATE TABLE nextctable1(id int PRIMARY KEY AUTO_INCREMENT, rssi int);

import pymysql.cursors

# Connect to the database
connection = pymysql.connect(host='127.0.0.1',
                             user='situser',
                             password='sit',
                             database='sitdb',
                             cursorclass=pymysql.cursors.DictCursor)

cursor = connection.cursor()
query1 = "SELECT * FROM pointdb;"
cursor.execute(query1)
data = cursor.fetchall()
data1 = data[-1]
connection.commit()
