import urllib
import string

zipcode = '21037'

url = 'http://uszip.com/zip/' + zipcode
conn = urllib.urlopen(url)

for line in conn.fp:
    line = line.strip()
    if 'Total population' in line:
        tp = line
        
conn.close()

pop = string.find(tp, 'population')
pop_num = tp[pop+len('population')+9:]
pop_num_fo_real = pop_num.split('<')

print pop
print pop_num
print pop_num_fo_real[0]


