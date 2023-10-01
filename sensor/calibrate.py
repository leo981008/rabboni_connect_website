import multi_rabboni
import numpy as np
import json

MAC_ADDRS = [
    'D4:E3:66:0D:55:3A',
    'DC:C6:A4:98:2A:E1', 
]

data_n = 0
sample_n = 500

data_sum = np.zeros((len(MAC_ADDRS), 3))

def handle_gyro_data(data):
    global data_sum, data_n, sample_n
    
    data_sum += data
    data_n += 1
    
    print(f"sampling... {data_n}/{sample_n}")
    
    if data_n >= sample_n:
        avg_offset = data_sum / sample_n
        
        with open("gyro_avg_offset.json", "r") as outfile:
            try:
                json_object = json.load(outfile)
                
            except json.decoder.JSONDecodeError:
                json_object = {}
            
        for i, device_avg in enumerate(avg_offset):
            json_object[MAC_ADDRS[i]] = list(device_avg)
            
        print(json_object)
        
        with open("gyro_avg_offset.json", "w") as outfile:
            json.dump(json_object, outfile)
            
        raise KeyboardInterrupt
            
            
multi_rabboni.MultiRabboniHandler(MAC_ADDRS, on_data_submitted=handle_gyro_data)