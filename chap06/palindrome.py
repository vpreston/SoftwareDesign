"""Module that provides is_palindrome.

Author of is_palindrome: Victoria Preston
"""

def first(word):
    """Returns the first character of a word.

    word: string

    returns: length 1 string
    """
    return word[0]


def last(word):
    """Returns the last character of a word.

    word: string

    returns: length 1 string
    """
    return word[-1]


def middle(word):
    """Returns all but the first and last character of a word.

    word: string

    returns: string
    """
    return word[1:-1]


def is_palindrome(word):
    """Returns whether a word is in fact, a palindrome.
    
    word: string
    
    returns: boolean
    """
    if len(word) <= 1:
        return True
    elif len(word) != 1 and first(word) != last(word):
        return False
    else:
        return is_palindrome(middle(word))

            
                
            
            
