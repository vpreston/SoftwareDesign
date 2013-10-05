"""Victoria Preston
October 5, 2013
Exercises from Think Python Chapter 8
"""

def new_is_palindrome(word):
    """determines whether a word is a palindrome
    word: string
    return: bool
    """
    return word == word[::-1]

def any_lowercase1(s):
    """ returns whether the first letter in a string is lower case"""
    for c in s:
        if c.islower():
            return True
        else:
            return False

def any_lowercase2(s):
    """returns only looks at the letter 'c' in the statement, also only returns a string, not a bool"""
    for c in s:
        if 'c'.islower():
            return 'True'
        else:
            return 'False'

def any_lowercase3(s):
    """Returns only if the last letter is lower case"""
    for c in s:
        flag = c.islower()
    return flag

def any_lowercase4(s):
    """returns whether any of the letters is lower case"""
    flag = False
    for c in s:
        flag = flag or c.islower()
    return flag

def any_lowercase5(s):
    """returns whether all letters in a string are lowercase"""
    for c in s:
        if not c.islower():
            return False
    return True

print any_lowercase5('eee')
