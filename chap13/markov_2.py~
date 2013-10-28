"""
Victoria Preston
October 27, 2013
My version of markov, the other version is largely based upon the solution in Think Python
"""

pair = ()
suffix = {}
import sys
import random

def process_file(filename, numprefix,skip_header=True):
    """Makes a histogram that contains the word pairs from a file
    filename: string
    skip_header: boolean, whether to skip the Gutenberg header
    Returns: map from each word pair to the number of times it appears.
    """
    
    fp = file(filename)
    skip_gutenberg_header(fp)

    for line in fp:        
        process_line(line, numprefix)
    
    
def skip_gutenberg_header(fp):
    """Reads from fp until it finds the line that ends the header.
    fp: open file object
    """
    for line in fp:
        if line.startswith('*END*THE SMALL PRINT!'):
            break


def process_line(line, numprefix):
    """Adds the words in the line to the histogram.
    Modifies hist.
    line: string
    hist: histogram (map from word to frequency)
    numprefix: int to define how many words in the prefix
    """
    t = []
    start = 0
    end = numprefix
    for word in line.rstrip().split():
        t.append(word)
    for word in t[start:end]:
        pair = word,
    if len(pair)<numprefix:
        start += 1
        end += 1
        return
    
    if pair in suffix:
        suffix[pair].append(t[end:end+1])
    else:
        suffix[pair] = t[end:end+1]

def make_text(paragraph_size):
    """Chooses random couples to put a paragraph
    paragraph_size:int
    """
    opening = random.choice(suffix.keys())
    
    for i in range(paragraph_size):
        ender = suffix.get(opening, 0)
        
        if ender == 0:
            make_text(paragraph_size - 1)
        
        word = random.choice(ender)
        print word,
        opening = opening[1:] + (word,)
         

def main(name, filename='emma.txt', n=100, order=2, *args):
    try:
        n = int(n)
        order = int(order)
    except:
        print 'Usage: randomtext.py filename [# of words] [prefix length]'
    else: 
        process_file(filename, order)
        make_text(n)


if __name__ == '__main__':
    main(*sys.argv)

    
