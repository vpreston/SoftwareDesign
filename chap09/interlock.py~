"""
Victoria Preston
October 13, 2013
"""

def interlock():
    t = []
    for line in open('words.txt'):
        # remove whitespace from the beginning and end
        word = line.strip()
        t.append(word)
    for element in t:
        if element[::2] in t and element[1:2] in t:
            print element, element[::2], element[1:2]
            
