# id will auto increase
# use nextc;
# CREATE TABLE nextctable1(id int PRIMARY KEY AUTO_INCREMENT, rssi int);

import pymysql.cursors

# Connect to the database
connection = pymysql.connect(host='192.168.2.116',
                             user='nextc',
                             password='nextc',
                             database='nextc',
                             cursorclass=pymysql.cursors.DictCursor)

cursor = connection.cursor()
# query = "select '*' from nextctable"
query = "insert nextctable1 value(0,-100)"
cursor.execute(query)
connection.commit()