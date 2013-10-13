"""
Victoria Preston
October 12, 2013
"""

def triple_letters(s):
    count = 0
    letter = 0
    while (letter + 2) < len(s):
        if s[letter+ 1] == s[letter + 2]:
            count += 1
            if count == 3:
                return True
            letter += 2
        else:
            count = 0
            letter += 1
    return False

def palindrome_num(number, start, end):
    num = str(number)
    nums = num[start:end]
    return nums == nums[::-1]

def ode_works(number):
    return palindrome_num(number, 2, 6) and palindrome_num(number + 1, 1, 6) and palindrome_num(number + 2, 1, 5) and palindrome_num(number + 3, 0, 6) 
        
#def main():
#    num_words = 0
#    for line in open('words.txt'):
        
        # remove whitespace from the beginning and end
#        word = line.strip()

        # only print words without the string's
#        if triple_letters(word):
#            num_words += 1
#            print word
#    total = float(num_words)      
#    print total
    
#if __name__ == '__main__':  
#    main()


# only print odemeter readings that work
number = 100000
while number <= 999999:
    if ode_works(number):
        print number
    number += 1      



