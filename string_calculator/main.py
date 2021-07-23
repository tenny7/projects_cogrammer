import math
import functions as f

class StringCalculator:
    # global variables

    fact = ""
    # prime = False
    
    def __init__(self,name):
        self.name = name
        

    def calculate(self,user_input):
        data = user_input.split(" ") #splt input into an array called data

        if ( len(data) > 1 and len(data) < 3 ):
            operator    = data[0]
            value       = data[1]
            n = int(value)

            if ( operator == 'prime'):  
                f.maxPrimeFactors(n) # call method to calculate prime
            elif (operator == "factorial"):
                f.factorial(n) # call method to calculate factorial
            else:
                print("operator not considered")

        elif (len(data) == 1):
            value = data[0]
            print(value)

        elif (len(data) == 3):
            operator    = data[0]
            value1      = data[1]
            value2      = data[2]

            f.basic_operators(value1,value2,operator)

        elif(len(data) > 3):
            operator    = data[0]
            total       = 0

            for b in range(1, len(data)):
                total = total + int(data[b])
            print("Sum of numbers is " + str(total))

        else:
            print("Number length not considered")
            

if __name__ == '__main__':
    obj = StringCalculator("String Caculator")
    obj.calculate("prime 15")