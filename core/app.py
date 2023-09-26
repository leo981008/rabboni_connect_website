import pymysql.cursors
from flask import Flask
from flask_cors import cross_origin


# Connect to the database
connection = pymysql.connect(host='127.0.0.1',
                             user='situser',
                             password='sit',
                             database='sitdb',
                             cursorclass=pymysql.cursors.DictCursor)

app = Flask(__name__)
@app.route("/")
@cross_origin()
def hello():
    cursor = connection.cursor()
    query1 = "SELECT * FROM pointdb;"
    cursor.execute(query1)
    data=cursor.fetchall() 
    data1 = data[-1]
    connection.commit()
    return data1

