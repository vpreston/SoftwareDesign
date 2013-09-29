"""
Solution to an exercise in Think Python.

Author: Victoria Preston

This code is the grid exercise in Chapter 3 of Think Python.  The called function takes arguments for the dimensions of the grid, and then prints out the appropriate shape for those arguments.
"""
def draw_four(n):
	print n
	print n
	print n
	print n

def draw_grid(row, column):
	segment1 = '* - - - - '
	segment2 = '|         '
	finstar = '*'
	fincol = '|'
	for i in range(row):
		print segment1 * column + finstar
		draw_four(segment2 * column + fincol)
	print segment1 * column + finstar

draw_grid(2,4)
