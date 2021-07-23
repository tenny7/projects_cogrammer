# Section D: Asymptotic Computational Complexity
`Option:` Option 2: Time Complexity.  

## Answer
The time complexity of the Collection.add method is `O(n)`

## Justification
In **line 15**, `let next` is variable declaration and the notation would be **O(1)**.  
In **line 16**, the `for` loop depends on the input size of #next and the notation is therefore **O(n)**
**Line 17 and 18** are basically assignment operations which consumes single steps each. i.e **O(1)** and  **O(1)**
The worst case time complexity is therefore **O(1) + O(n) + O(1) + O(1)** = `O(n)`


