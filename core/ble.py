import struct
from bluepy.btle import *
import binascii
import struct
from bluepy import btle

# callback class
def com(temp):
    dec = int(temp,16)
    if dec > 32768:
        dec = ((dec ^ 0xFFFF) + 1 )* -1
    dec = dec * 2 / 32768
    return dec

class MyDelegate(DefaultDelegate):
    def __init__(self):
        DefaultDelegate.__init__(self)

    def handleNotification(self, cHandle, data):
        
        t1 = binascii.hexlify(data)[0:4]
        t2 = binascii.hexlify(data)[4:8]
        t3 = binascii.hexlify(data)[8:12]
        t4 = binascii.hexlify(data)[12:16]
        t5 = binascii.hexlify(data)[16:20]
        t6 = binascii.hexlify(data)[20:24]

        print("Acc X = ",com(t1))
        print("Acc Y = ",com(t2))
        print("Acc Z = ",com(t3))
        print("Gyro X = ",com(t4)*500)
        print("Gyro Y = ",com(t5)*500)
        print("Gyro Z = ",com(t6)*500)
        
        

##############################################################
#Scan boardcast
'''scanner = Scanner()
devices = scanner.scan(10.0)

for dev in devices:
    print ("Device %s (%s), RSSI=%d dB" % (dev.addr, dev.addrType, dev.rssi))
    for (adtype, desc, value) in dev.getScanData():
        print ("  %s = %s" % (desc, value))'''

# connect to device
#per = Peripheral("D4:DE:30:7D:F5:BC", "random")   #change address to your own rabboni's address
#per = Peripheral("CC:24:51:D9:16:28", "random")   #change address to your own rabboni's address
per = Peripheral()   #change address to your own rabboni's address
for i in range(100):
    try:
        per.connect("DC:C6:A4:98:2A:E1", "random")
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
    setup_data = b"\x01\x00"            #data for enable notification
    led_data = b"\x37\x01\x01"          #data for led 

    per.writeCharacteristic(45, led_data, withResponse=True)        #write led characteristic
    per.writeCharacteristic(23, setup_data, withResponse=True)      #write sensor characteristic
    
    # wait for answer
    while True:
        if per.waitForNotifications(5.0):                           
            continue
        
except KeyboardInterrupt:
    print('disconnecting...')

finally:
    per.disconnect()
