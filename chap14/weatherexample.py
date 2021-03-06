"""
Courtesy of notjustmath.wordpress.com
"""
from htmllib import HTMLParser
import re
import urllib
 
class weatherParser(HTMLParser):
    def reset(self):
        HTMLParser.reset(self)
        self.timeflag = 0
        self.tempflag = 0
        self.precipflag = 0
    def start_div(self, attr):
         cl = [v for k, v in attr if k == 'class']
         #print cl
         if cl:
             if cl[0] == 'hbhWxTime': self.timeflag = 1
             elif cl[0] == 'hbhWxTemp': self.tempflag = 1
             elif cl[0] == 'hbhWxPrecip': self.precipflag = 1
    def handle_data(self, text):
        if self.timeflag == 1:
            print text, ":",
            self.timeflag = 0;
        if self.tempflag == 1:
            print text, 'degrees.',
            self.tempflag = 0
        if self.precipflag == 1:
            print text,
            self.precipflag = 2
        elif self.precipflag == 2:
            print text
            self.precipflag = 0   


sock = urllib.urlopen("http://www.weather.com/weather/hourbyhour/graph/USNY0996")
wsource = sock.read()
sock.close()

wparser = weatherParser()
wparser.feed(wsource)
wparser.close()
