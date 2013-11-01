"""
Victoria Preston
October 31, 2013
Chpater 16 Exercise 16.7 from Think Python
"""

from datetime import *
import datetime

def return_today():
    """ 
    Gives the date by using the datetime module, and referencing the days of the week via a list
    """
    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    raw_today = date.today()
    today = str(raw_today)
    week_num = date.weekday(raw_today)
    for i in range(7):
        if i == week_num:
            day = days[i]
    return day, today


def birthday_info(year, month, day):
    """
    provides age and countdown to next birthday
    year, month, day - ints
    returns ints
    """
    now = datetime.datetime.now()
    birth = datetime.date(year, month, day)
    
    if now.month > birth.month:
        age = now.year - birth.year
        coming_birth = datetime.date(now.year+1, birth.month, birth.day)
    elif now.month == birth.month:
        if now.day > birth.day:
            age = now.year - birth.year
            coming_birth = datetime.date(now.year+1, birth.month, birth.day)
        else:
            age = now.year - birth.year
            print 'Happy Birthday!'
            coming_birth = datetime.date(now.year+1, birth.month, birth.day)
    else:
        age = now.year -birth.year - 1
        coming_birth = datetime.date(now.year, birth.month, birth.day)

    days = abs(now.month-coming_birth.month)*30 +  abs(now.day-coming_birth.day) 
    hours = abs(now.hour - 24)
    minutes = abs(60 - now.minute)
    seconds = abs(60 - now.second)
    
    return age, days, hours, minutes, seconds

def doubleday(b1, b2):
    """finds the date at which one of the people is double the age of the other
    b1, b2 - list of ints
    returns date
    """
    birth1 = datetime.date(b1[0], b1[1], b1[2])
    birth2 = datetime.date(b2[0], b2[1], b2[2])
    
    difference = abs(birth1 - birth2)
    
    if birth1 > birth2:
        datediff = (birth1 + difference)
    elif birth2 > birth1:
        datediff = (birth2 + difference)
    
    return datediff
    


print return_today()
print birthday_info(1994, 04, 19)
print doubleday([2003, 10, 11], [2006, 12, 26])

