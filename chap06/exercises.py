"""
Author: Victoria Preston
Exercises from Chapter 6 in ThinkPython
"""

def is_power(a, b):
    if a%b != 0:
        print 'Nope-erino!'
        return False
    elif (a/b)%b != 0:
        print 'whoopsie!'
        return False
    else:
        print 'Yuppers!'
        return True
        
    
def gcd(a, b):
    if a>0 and b>0:
        r = a%b
        return gcd(b, r)
    elif a==0:
        return b
    elif b==0:
        return a

print gcd(8, 16)
