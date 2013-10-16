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

def remove_duplicates(l):
    res = []
    for i in range(len(l)):
        if l[i] not in res:
            res.append(l[i])
    return res

print cumulative_sum([1, 2, 3])
print remove_duplicates([1, 2, 2, 3, 6, 7])
