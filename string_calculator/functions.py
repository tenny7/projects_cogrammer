import math


def factorial(n):
    factorial = 1
    if n < 0:
        print(" You cannot get a factorial for negative numbers")    
    elif n == 0:    
        print("Answer is 1")    
    else:    
        for i in range(1,n + 1):    
            factorial = factorial*i    
        print("The factorial of", n,"is",factorial) 

# A function to find largest prime factor
def maxPrimeFactors (n):
     
    # Initialize the maximum prime factor
    # variable with the lowest one
    maxPrime = -1
     
    # Print the number of 2s that divide n
    while n % 2 == 0:
        maxPrime = 2
        n >>= 1     # equivalent to n /= 2
         
    # n must be odd at this point
    while n % 3 == 0:
        maxPrime = 3
        n=n/3
     
    # now we have to iterate only for integers
    # who does not have prime factor 2 and 3
    for i in range(5, int(math.sqrt(n)) + 1, 6):
        while n % i == 0:
            maxPrime = i
            n = n / i
        while n % (i+2) == 0:
            maxPrime = i+2
            n = n / (i+2)
         
    # This condition is to handle the
    # case when n is a prime number
    # greater than 4
    if n > 4:
        maxPrime = n
     
    print("Highest prime factor is " + str(math.ceil(maxPrime) ) )


def basic_operators(value1, value2, operator):
    # covert to float data type
    num1 = float(value1)
    num2 = float(value2)
    temp = 0
    
    # handle computation for + - * /
    if (operator == '+'): 
        temp = num1 + num2
        print(str(math.ceil(temp)) )
    elif (operator == '-'):
        temp = num1 - num2
        print(str(round(temp,2)) )
    elif (operator == '*'):
        temp = num1 * num2
        print( str(math.ceil( (abs(temp)) )))
    elif (operator == '/'):
        temp = num1 / num2
        print(str(math.ceil(temp)) )    


     