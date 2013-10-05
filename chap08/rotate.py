"""Victoria Preston
October 5, 2013
Exercise from Think Python Chapter 8"""

def rotate(s, n):
    """takes a string and shifts the letters by some number of letters forward or back in the alphabet
    s: string
    n: int
    returns: string
    """
    word = ""
    print word
    for c in s:
        number_code = ord(c)
        print number_code
        new_code = number_code + n
        if new_code >= 97 and new_code <= 123:
            new_char = chr(new_code)
        elif new_code < 97:
            new_char = chr(123 - (97 - new_code))
        else:
            new_char = chr(97 + new_code - 123)
        word = word + new_char
    return word
    
    
print 'hello'
print rotate('melon', -13)

