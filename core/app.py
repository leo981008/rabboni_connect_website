import pymysql.cursors
from flask import Flask
from flask_cors import cross_origin
import time

# Connect to the database
connection = pymysql.connect(host='127.0.0.1',
                             user='situser',
                             password='sit',
                             database='sitdb',
                             cursorclass=pymysql.cursors.DictCursor)

app = Flask(__name__)
@app.route("/")
@cross_origin()
def request_data():
    cursor = connection.cursor()
    query1 = "SELECT * FROM pointdb ORDER BY id DESC LIMIT 1;"
    cursor.execute(query1)
    data=cursor.fetchall() 
    data1 = data[0]
    connection.commit()
    
    return data1

@app.route("/chart")
def request_chart():
    cursor = connection.cursor()
    time_frame_in_seconds = 24 * 60 * 60
    query1 = f"SELECT * FROM pointdb WHERE time>{int(time.time() - time_frame_in_seconds)} ORDER BY id;"
    cursor.execute(query1)
    data = cursor.fetchall()
    connection.commit()
    
    chart = {"data": [0, 1, 2, 3, 4]}
    return chart