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


def prime(d):
    while d % 2 == 0:
        highest_prime = 2
        d /= 1

        for k in range(3, int(math.sqrt(d)) + 1, 2):
            while d % k == 0:
                highest_prime = k
                d = d / k

        if d > 2:
            highest_prime = d
        print (str(highest_prime) )


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


     