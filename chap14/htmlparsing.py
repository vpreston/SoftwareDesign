"""
Victoria Preston
October 27, 2013
Attempt at using the urllib and BeautifulSoup libraries to pinpoint location with an html code
"""
import urllib
from sgmllib import SGMLParser
import re
from BeautifulSoup import *

#Attempt at using the sgml parser to create a class which reads an html link and pinpoints a particular word.  Difficulty in return a direct line number
class zipParser(SGMLParser):
    def reset(self):
        SGMLParser.reset(self)
        self.popflag = 0
        self.latflag = 0
        self.longflag = 0
    def start_div(self, attr):
         cl = [v for k, v in attr if k == 'class']
         #print cl
         if cl:
             if cl[0] == 'zip-stats sip-stats-left': self.popflag = 1
             elif cl[0] == 'social tw': self.latflag = 1
             elif cl[0] == 'social tw': self.longflag = 1
    def handle_data(self, text):
        if self.popflag == 1:
            print text, 'Yay'
            self.popflag = 0;
        if self.latflag == 1:
            print text, 'YaY'
            self.latflag = 0
        if self.longflag == 1:
            print text, 'yay'
            self.longflag = 2
        elif self.longflag == 2:
            print text, 'YAY'
            self.longflag = 0

zipcode = raw_input('What zipcode would you like data for?\n')
zipcodestring = 'http://www.uszip.com/zip/' + zipcode
site = urllib.urlopen(zipcodestring)
zsource = site.read()
results = re.findall('(Population)', zsource)
      

zsource[0:3000]
site.close()

zparser = zipParser()
zparser.feed(zsource)
zparser.close()

#Uses BeautifulSoup to pinpoint the line and calls for population and numbers.  Due to internal features of the site html, difficulty in getting more precise than this
html = zsource
soup = BeautifulSoup(html)
population = [dt.string for dt in soup.findAll("hr", "dt")]
population_num = [dd.string for dd in soup.findAll("hr","dd")]
print population_num
print population

        
       
   

