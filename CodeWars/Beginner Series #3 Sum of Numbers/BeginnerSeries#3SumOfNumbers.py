import numpy as np

def getSum(a,b):
    # swap a and b if a is larger than b
    if a > b:
        a, b = b, a
    
    # creates an array from a to b including both
    arr = np.arange(a, b+1)
    return np.sum(arr)

if __name__ == "__main__":
    a = -2
    b = 5
    print(getSum(a,b))