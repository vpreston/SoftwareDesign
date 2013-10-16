"""
Victoria Preston
October 15, 2013
"""

def most_frequent(s):
    """sorts the frequency at which certain letters appear in a phrase
    s - string
    returns a list of values
    """
    d = dict()
    t = []
    for c in s:
        val = d.get(c, 0)
        d[c] = 1 + val
    for letter, number in d.items():
        t.append((number, letter))
    t.sort(reverse=True)
    return t

print most_frequent('this is a tale of two cities')
print most_frequent('cest un conte de deux villes')
print most_frequent('esta es una historia de dos ciudades')
