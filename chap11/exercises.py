"""
Victoria Preston
October 15, 2013
"""

def histogram(s):
    d = dict()
    for c in s:
        if c not in d:
            d[c] = 1
        else:
            d[c] += 1
    return d

def histogram_improve(word):
    d = dict()
    for c in word:
        val = d.get(c, 0)
        d[c] = 1 + val_look
    return d

def reverse_lookup(d, v):
    key_list = []
    for k in d:
        if d[k] == v:
            key_list.append(k)
    return key_list

d = {'hey':'horse', 'barn':'door', 'stop':'door'}

print reverse_lookup(d, 'lock')
           
            


