"""
Victoria Preston
October 13, 2013
"""

def is_in_list(lizt, word):
    for line in open('words.txt'):
        # remove whitespace from the beginning and end
        word = line.strip()
        if word in lizt:
            return True
    return False


