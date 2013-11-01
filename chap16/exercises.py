"""
Victoria Preston
October 31, 2013
Chapter 16 of Think Python Exercises
"""

class Time(object):
    """Represents the time of day.
    attributes: hour, minute, second
    """

time = Time()
time.hour = 11
time.minute = 10
time.second = 30

othertime = Time()
othertime.hour = 5
othertime.minute = 55
othertime.second = 30

def print_time(TObj):
    print '%.2d : %.2d : %.2d' %(TObj.hour, TObj.minute, TObj.second)


def is_after(t1, t2):
    hour_bool= t1.hour - t2.hour
    minute_bool = t1.minute - t2.minute
    second_bool = t1.second - t2.second
    return hour_bool >= 0 and (hour_bool >= 0 or minute_bool >= 0) and (hour_bool >= 0 or minute_bool >= 0 or second_bool > 0)
    
   

print_time(time)
print is_after(time, othertime)
