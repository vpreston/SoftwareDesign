"""
Victoria Preston
September 21, 2013

This program is an attempt at creating a Gosper Curve 
"""

from swampy.TurtleWorld import *
from math import *

def gosperA(t, length):
	if length >=10:
		gosperA(t, length/2)
		lt(t, 60)
		gosperB(t, length/2)
		lt(t, 120)
		gosperB(t, length/2)
		rt(t, 60)
		gosperA(t, length/2)
		rt(t, 120)
		gosperA(t, length/2)
		gosperA(t, length/2)
		rt(t, 60)
		gosperB(t, length/2)
		lt(t, 60)
	else:
		fd(t, length)

def gosperB(t, length):
	if length >=10:
		rt(t, 60)
		gosperA(t, length/2)
		lt(t, 60)
		gosperB(t, length/2)
		gosperB(t, length/2)
		lt(t, 120)
		gosperB(t, length/2)
		lt(t, 60)
		gosperA(t, length/2)
		rt(t, 120)
		gosperA(t, length/2)
		rt(t, 60)
		gosperB(t, length/2)
	else:
		fd(t, length)

world = TurtleWorld()
bob = Turtle()
bob.delay = 0.01

gosperA(bob, 100000)
wait_for_user()

