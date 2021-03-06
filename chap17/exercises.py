"""
Victoria Preston
Exercises from Think Python Chapter 17
November 7, 2013
"""
"""Bad Solution Here"""
class Kangaroo(object):
    """a Kangaroo is a marsupial"""
   
     
    def __init__(self, contents=[]):
        """initialize the pouch contents; the default value is
        an empty list"""
        self.pouch_contents = contents
            
    def __init__(self, contents = None):
        if contents == None:
            contents = []
        self.pouch_contents = contents
        #so by adding this, I can create a second kangaroo, does it work with multiple, and if so, why?  could I just have this statement?

    def __str__(self):
        """return a string representaion of this Kangaroo and
        the contents of the pouch, with one item per line"""
        t = [ object.__str__(self) + ' with pouch contents:' ]
        for obj in self.pouch_contents:
            s = '    ' + object.__str__(obj)
            t.append(s)
        return '\n'.join(t)

    def put_in_pouch(self, item):
        """add a new item to the pouch contents"""
        self.pouch_contents.append(item)

kanga = Kangaroo()
roo = Kangaroo()
kang = Kangaroo()
#so these two things are referencing the same thing, which is creating an alias right?  So would a deepcopy be better instead?  Or a new initalizing statement?
kanga.put_in_pouch('wallet')
kanga.put_in_pouch('car keys')
kanga.put_in_pouch(roo)

print kanga
print roo #it appears that roo is a copy of kanga...which means it needs to be initalized as a new kangaroo...
print kang

"""Good solution Here

class Kangaroo(object):
    def __init__(self, pouch_contents = []):
        self.pouch_contents = pouch_contents
        
    def __init__(self, pouch_contents = None):
        if pouch_contents == None:
            pouch_contents = []
        self.pouch_contents = pouch_contents
        
    def put_in_pouch(self, other):
        self.pouch_contents.append(other)
        
    def __str__(self):
        t = [object.__str__(self) + ' and in the pouch is:']
        for obj in self.pouch_contents:
            s = '       ' + object.__str__(obj)
            t.append(s)
        return '\n'.join(t)

kanga = Kangaroo()
roo = Kangaroo()
kanga.put_in_pouch(roo)
print kanga
"""

