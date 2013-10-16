"""
Victoria Preston
October 16, 2013
"""

memo = {}
memo[''] = ['']

def make_dictionary():
    """makes a dictionary of all the words I care about"""
    d = dict()
    lizt = open('words.txt')
    for line in lizt:
        word = line.strip().lower()
        d[word] = word
    for letter in ['a', 'i', '']:
        d[letter] = letter
    return d

def children_words(word, dictionary):
    """creates a list of words that can be made by other words
    word - str
    dictionary - dictionary
    returns list
    """
    t = []
    for i in range(len(word)):
        word_child = word[:i]+word[i+1:] 
        if word_child in dictionary:
            t.append(word_child)
    return t
        
def is_reducible(word, dictionary):
    if word in memo:
        return memo[word]
    
    res = []
    for kid in children_words(word, dictionary):
        t = is_reducible(kid, dictionary)
        if t:
            res.append(kid)
    memo[word] = res
    return res
    
def redux_dictionary(dictionary):
    res = dict()
    for word in dictionary:
        t = is_reducible(word, dictionary)
        if t != []:
            res[word] = word
    for letter in ['a', 'i', '']:
        res[letter] = letter
    return res

def redux_line(word, dictionary):
    if len(word) == 0:
        return 
    print word, 
    lizt = is_reducible(word, dictionary)
    if len(lizt) >= 1:
        redux_line(lizt[0], dictionary)

def longest_redux(dictionary):
    t = []
    for word in dictionary:
        t.append((len(word), word))
    t.sort(reverse = True)
    for length, word in t[0:5]:
        redux_line(word, dictionary)
        print '\n'

      
if __name__ == '__main__':
    d = make_dictionary()
    m = redux_dictionary(d)
    lizt = open('words.txt')
    for line in lizt:
        word = line.strip().lower()
    longest_redux(m)
    
        
