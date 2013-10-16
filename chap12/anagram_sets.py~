"""
Victoria Preston
October 15, 2013
"""

def word_character(word):
    """provides a list of the letters in a word in order"""
    t = list(word)
    t.sort()
    t = ''.join(t)
    return t

def make_dictionary():
    """creates a sequence of the word characterizations and the series of anagrams
    """
    d = {}
    lizt = open('words.txt')
    for line in lizt:
        word = line.strip().lower()
        t = word_character(word)
        if t not in d:
            d[t] = [word]
        else:
            d[t].append(word)
    return d

    
def find_anagrams(dictionary):
    """prints all the anagrams
    dictionary - the list of signatures
    """
    t = []
    for anagram in dictionary.values():
        if len(anagram) > 1:
            t.append([len(anagram), anagram])
    return t

def put_in_order(anagram_list):
    anagram_list.sort()
    for parts in anagram_list:
        print parts

def certain_length(number):
    d = {}
    lizt = open('words.txt')
    for line in lizt:
        word = line.strip().lower()
        if len(word) == 8:
            t = word_character(word)
            if t not in d:
                d[t] = [word]
            else:
                d[t].append(word)
    t = []
    for anagram in d.values():
        if len(anagram) > 1:
            t.append([len(anagram), anagram])
    return t
        

if __name__ == '__main__':
    d = make_dictionary()
    a = find_anagrams(d)
    #put_in_order(a)
    eight_letters = certain_length(8)
    put_in_order(eight_letters)
