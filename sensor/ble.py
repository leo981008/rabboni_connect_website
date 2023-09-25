import struct
from bluepy.btle import *
import binascii
import struct
from bluepy import btle
import time
from ahrs.filters import Mahony
import numpy as np
from scipy.spatial.transform import Rotation


# ========VARIABLES========

# MAC_ADDR = 'DC:C6:A4:98:2A:E1'
MAC_ADDR = 'D4:E3:66:0D:55:3A'

ACC_OFFSET = np.array([
    0.02037890625,
    -0.01312548828125,
    0.988601318359375
])

GYRO_OFFSET = np.array([
    -4.05194091796875,
    9.18939208984375,
    0.43365478515625
])

# callback clas
def com(temp):
    dec = int(temp,16)
    if dec > 32768:
        dec = ((dec ^ 0xFFFF) + 1 )* -1
    dec = dec * 2 / 32768
    return dec

class MyDelegate(DefaultDelegate):
    def __init__(self):
        DefaultDelegate.__init__(self)
        self.last_frame_time = time.time()
        self.orientation = Mahony(frequency=10)
        self.Q = np.array([1., 0., 0., 0.])

    def handleNotification(self, cHandle, data):
        delta_time = time.time() - self.last_frame_time
        
        t1 = binascii.hexlify(data)[0:4]
        t2 = binascii.hexlify(data)[4:8]
        t3 = binascii.hexlify(data)[8:12]
        t4 = binascii.hexlify(data)[12:16]
        t5 = binascii.hexlify(data)[16:20]
        t6 = binascii.hexlify(data)[20:24]

        acc = np.array([com(t1), com(t2), com(t3)]) - ACC_OFFSET
        gyro = np.array([com(t4), com(t5), com(t6)]) * 500 - GYRO_OFFSET
        
        print(acc)
        
        self.last_frame_time = time.time()
        
        

##############################################################
#Scan boardcast
'''scanner = Scanner()
devices = scanner.scan(10.0)

for dev in devices:
    print ("Device %s (%s), RSSI=%d dB" % (dev.addr, dev.addrType, dev.rssi))
    for (adtype, desc, value) in dev.getScanData():
        print ("  %s = %s" % (desc, value))'''

per = Peripheral()

for i in range(100):
    try:
        per.connect(MAC_ADDR, "random")
        break
    except btle.BTLEDisconnectError:
        print('Failed, Retrying...')

try:
    services_dic = per.getServices()    #get all service
    for service in services_dic:
        print("service uuid: ",service.uuid)        #get service's uuid
        charac_dic = service.getCharacteristics()   #get all characteristic
        for charac in charac_dic:
            print("characteristics uuid: ",charac.uuid)     #get characteristic's uuid
            print("handle: ",charac.getHandle())        #get characteristic's handle

    # set callback for notifications
    per.setDelegate(MyDelegate())

    # enable notification
    setup_data = b"\x01\x00"            #data for enable notification          #data for led 

    per.writeCharacteristic(23, setup_data, withResponse=True)      #write sensor characteristic
    
    # wait for answer
    while True:
        if per.waitForNotifications(5.0):                           
            continue
        
except KeyboardInterrupt:
    print('disconnecting...')

finally:
    per.disconnect()
