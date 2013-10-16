"""
Victoria Preston
October 15, 2013
"""

def rotate(s, n):
    """takes a string and shifts the letters by some number of letters forward or back in the alphabet
    s: string
    n: int
    returns: string
    """
    word = ""
    for c in s:
        number_code = ord(c)
        new_code = number_code + n
        if new_code >= 97 and new_code <= 123:
            new_char = chr(new_code)
        elif new_code < 97:
            new_char = chr(123 - (97 - new_code))
        else:
            new_char = chr(97 + new_code - 123)
        word = word + new_char
    return word

def mans_best_friend():
    d = dict()
    file = open('words.txt')
    for line in file:
        word = line.strip().lower()
        d[word] = word
    return d

def rotate_pairs(word, diction):
    for i in range(1, 14):
        rot = rotate(word, i)
        if rot in diction:
            print word, i, rot

if __name__ == '__main__':
    dictionary = mans_best_friend()
    for words in dictionary:
        rotate_pairs(words, dictionary)
        
        
        
        
        
        
