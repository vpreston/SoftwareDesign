"""
Victoria Preston
September 21, 2013

This program is from exercises in Chapter 5 of Think Python
"""

from swampy.TurtleWorld import *
from math import *

def draw(t, length, n):
    if n == 0:
        return
    angle = 50
    fd(t, length*n)
    lt(t, angle)
    draw(t, length, n-1)
    rt(t, 2*angle)
    draw(t, length, n-1)
    lt(t, angle)
    bk(t, length*n)

def koch(t, length):
	if length >= 3:
		koch(t, length/3)
		lt(t, 60)
		koch(t, length/3)
		rt(t, 120)
		koch(t, length/3)
		lt(t, 60)
		koch(t, length/3)
	else:
		fd(t, length)

def cesaro(t, length):
	if length >= 3:
		cesaro(t, length/3)
		lt(t, 85)
		cesaro(t, length/3)
		rt(t, 170)
		cesaro(t, length/3)
		lt(t, 85)
		cesaro(t, length/3)
	else:
		fd(t, length)



def snowflake(t,length):
	for i in range(3):
		koch(t, length)
		rt(t, 120)

world = TurtleWorld()
bob = Turtle()
bob.delay = 0.01
snowflake(bob, 100)

wait_for_user()
