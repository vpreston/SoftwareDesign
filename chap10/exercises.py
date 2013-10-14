"""
Victoria Preston
October 13, 2013
"""

def nested_sum(lizt):
    total = 0
    for l in lizt:
        for elements in l:
            total += elements
    return total

def cumulative_sum(lizt):
    res = []
    total = 0
    for element in lizt:
        total += element
        res.append(total)
    return res

print cumulative_sum([1, 2, 3])
