"""
Victoria Preston
October 27, 2013
"""

import urllib
import HTMLParser
import string

conn = urllib.urlopen('http://thinkpython.com/secret.html')

def find_data(zipcode):
    zipcodestring = 'http://www.uszip.com/zip/' + zipcode
    site = urllib.urlopen(zipcodestring)
    for line in site.fp:
        line = line.strip()
        if 'Total population' in line:
            totpop = line
            break
        if 'Lat' in line:
            latitude = line
        if 'Longitude' in line:
           longitude = line
    site.close()
    pop = string.find(totpop, 'population')
    pop_num = totpop[pop+len('population')+9:]
    final = pop_num.split('<')
    
    lat = string.find(latitude, 'latitude')
    lat_num = latitude[lat+len('latitude') + 9:]
    final_lat = lat_num.split('<')
    
    longi = string.find(longitude, 'longitude')
    long_num = longitude[longi+len('longitude') + 0:]
    final_long = long_num.split('<')
    
    print final[0], ' in the population'
    print final_lat[0]
    print final_long[0]
    
        
 
zipcode = raw_input('What zipcode would you like data for?\n')
find_data(str(zipcode))
conn.close()

