"""
Victoria Preston
October 13, 2013
"""

def reverse_pair():
    t = []
    for line in open('words.txt'):
        # remove whitespace from the beginning and end
        word = line.strip()
        t.append(word)
    for elements in t:
        element = str(elements)
        if element[::-1] in t:
            print element, element[::-1]

reverse_pair()
            
