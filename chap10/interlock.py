"""
Victoria Preston
October 13, 2013
"""

def is_in_list(lizt, word):
    if word in lizt:
        return True
    return False

def check_interlock(lizt, word):
    even = word[::2]
    odd = word[1::2]
    return is_in_list(lizt, even) and is_in_list(lizt, odd)

def interlock():
    t = []
    for line in open('words.txt'):
        # remove whitespace from the beginning and end
        word = line.strip()
        t.append(word)
    for element in t:
        if check_interlock(t, element):
            print element, element[::2], element[1::2]
    
def is_triple_interlock(lizt, word):
    first = word[::2]
    second = word[1::2]
    third = word[2::2]
    return is_in_list(lizt, first) and is_in_list(lizt, second) and is_in_list(lizt, third)

def interlock_3():
    t = []
    for line in open('words.txt'):
        word = line.strip()
        t.append(word)
    for element in t:
        if is_triple_interlock(t, element):
            print element, element[::2], element[1::2], element[2::2]

            
interlock_3()

