"""Test code for palindrome.py.

Author: Allen B. Downey
"""

from math import *

def has_no_e(s):
    for c in s:
        if ord(c) == ord('e'):
            return False
    return True

def avoids(s, out):
    for c in s:
        for k in out:
            if c == k:
                return False
    return True
            
def uses_only(s, able):
    for c in s:
        if c not in able:
            return False
    return True 
    
def uses_all(s, able):
    for k in able:
        if k not in s:
            return False
    return True
            
def is_abecedarian(s):
    first = s[0]
    for c in s:
        if c < first:
            return False
        first = c
    return True

    
#def main():
#   num_words = 0
#    num_es = 0
#    for line in open('words.txt'):
#        num_words += 1
        # remove whitespace from the beginning and end
#        word = line.strip()

        # only print words without e's
#        if has_no_e(word):
#            num_es += 1
#            print word
#    quotient = float(num_es)/float(num_words)       
#    print quotient

#def main():
#    num_words = 0
#    num_without = 0
#    avoid = raw_input('What should we screen out?\n')
#    for line in open('words.txt'):
#        num_words += 1
        # remove whitespace from the beginning and end
#        word = line.strip()

        # only print words without the string's
#        if avoids(word, avoid):
#            num_without += 1
#            print word
#    total = float(num_without)      
#    print total

def main():
    num_words = 0
    num_with = 0
    able = raw_input('What should we screen for?\n')
    for line in open('words.txt'):
        num_words += 1
        # remove whitespace from the beginning and end
        word = line.strip()

        # only print words without the string's
        if is_abecedarian(word):
            num_with += 1
            print word
    total = float(num_with)      
    print total
    
if __name__ == '__main__':  
    main()
