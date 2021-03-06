
"""
This code is a series of functions requested to be created in Chapter 4 of Think Python.  
"""

from swampy.TurtleWorld import *
from math import *

world =TurtleWorld()
bob = Turtle()
print bob

def square(t, length):
	for i in range(4):
		fd(t, length)
		lt(t)

def polygon(t, length, n):
	for i in range(n):
		fd(t, length)
		lt(t, 360/n)

def circle(t, radius):
	circumference = 2 * radius * pi
	length = circumference/360
	n = int(circumference/length)
	polygon(t, length, n)

def arc(t, radius, angle):
	circumference = 2 * pi * radius	
	arclength = circumference * (angle/360)
	length = circumference/360
	for i in range(angle):
		fd(t, length)
		lt(t, 1)

bob.delay = 0.01
square(bob, 50)

wait_for_user()
