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
# query = "select '*' from nextctable"
query = "insert pointdb value(0,111,222,333,444,555,666)"
cursor.execute(query)
connection.commit()
