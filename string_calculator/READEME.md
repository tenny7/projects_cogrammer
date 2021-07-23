# String Calculator

Driver code is contained in **line 53** of the _main.py_ file
> obj.calculate("+ 12.5 3")

The String calculator calculates

* Value
* Factorial
* Highest Prime number
* Addition +
* Subtraction -
* Multiplication *
* Division /
* Long arithmetic expressions


## Inputs -> Outputs format  
* Value, e.g. "3.2" -> "3.2"
* Factorial, e.g. "factorial 5" -> "120"
* Highest prime number under a given value, e.g. "prime 10" -> "7"
* Addition, e.g. "+ 12.5 12.5" -> "25"
* Subtraction, e.g. "- 43.7 50" -> "-6.3"
* Multiplication, e.g. "* 6 -12" -> "72"
* Division, e.g. "/ 20 10" -> "2"
* Long arithmetic expressions, e.g. "+ 2 3 4 10" -> "19"
* It takes string input and output.
* Operators prefix their operands in expressions.
* It handles integers, floating-point numbers and negative numbers.
* It removes the fractional part of the result if the said fractional part is equivalent to 0, e.g. 4.0 becomes 4.
* It handles overflows.


The file _functions.py_ contains code logic for calculating various function.  This file is imported in the _main.py_ and called when the codition is met.  
This encourages a modular design pattern and allows for sclaing and code maintenance.

