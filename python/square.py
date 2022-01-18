# This function accepts an integer argument and determines whether or not that 
# integer is the square of an integer, then returns a boolean value indicating whether
# it is (true) or isn't (false)
import math;

def is_square(n):
    perfectSquare = False
    #check that n is greater than 0, then check that the square root of n
    #has no fractional part
    if n >=0 and math.sqrt(n)%1==0:
        perfectSquare = True
    return perfectSquare