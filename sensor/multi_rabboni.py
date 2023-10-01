import struct
from bluepy.btle import *
import binascii
import struct
from bluepy import btle
import time
from threading import Thread
import numpy as np
import sys

def com(temp):
    dec = int(temp,16)
    if dec > 32768:
        dec = ((dec ^ 0xFFFF) + 1 )* -1
    dec = dec * 2 / 32768
    return dec

class MyDelegate(DefaultDelegate):
    def __init__(self, device_handler, device_index):
        DefaultDelegate.__init__(self)
        
        self.device_handler = device_handler
        self.device_index = device_index

    def handleNotification(self, cHandle, data):
        t1 = binascii.hexlify(data)[0:4]
        t2 = binascii.hexlify(data)[4:8]
        t3 = binascii.hexlify(data)[8:12]
        t4 = binascii.hexlify(data)[12:16]
        t5 = binascii.hexlify(data)[16:20]
        t6 = binascii.hexlify(data)[20:24]

        gyro = np.array([com(t1), com(t2), com(t3)])
        
        self.device_handler.gyro_data[self.device_index] = gyro
        self.device_handler.gyro_submitted[self.device_index] = True

class MultiRabboniHandler:
    def __init__(self, mac_addrs, on_data_submitted=None):
        self.gyro_data = np.zeros((len(mac_addrs), 3))
        self.gyro_submitted = np.zeros(len(mac_addrs), dtype=bool)
        
        for i, mac in enumerate(mac_addrs):
            t = Thread(target=self.try_connect, args=(mac, i))
            t.daemon = True
            t.start()
            
        while True:
            try:
                if (self.gyro_submitted == True).all():
                    on_data_submitted(self.gyro_data)
                    self.gyro_submitted.fill(0)
                    
            except KeyboardInterrupt:
                print("Stopping...")
                sys.exit()
                
                    
    def try_connect(self, mac, device_index):
        per = Peripheral()
        for i in range(100):
            try:
                per.connect(mac, "random")
                per.setDelegate(MyDelegate(self, device_index))
                setup_data = b"\x01\x00"
                per.writeCharacteristic(23, setup_data, withResponse=True)
                
                print(f'{mac} Connected!')
                
                while True:
                    if per.waitForNotifications(5.0):                           
                        continue
                    
                break
            
            except btle.BTLEDisconnectError:
                print(f'{mac} Failed, Retrying...')
                

def handle_gyro_data(data):
    print(data)
    
if __name__ == '__main__':
    MultiRabboniHandler(['D4:E3:66:0D:55:3A', 'DC:C6:A4:98:2A:E1'], on_data_submitted=handle_gyro_data)