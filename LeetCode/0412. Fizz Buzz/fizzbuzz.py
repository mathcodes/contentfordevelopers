"This solution make use of string concatenation to find fizzbuzz and prevent use of --else--"

class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        output = []
        for i in range(1, n + 1):
            test = ""
            if i % 3 == 0:
                test += "Fizz"
            if i % 5 == 0:
                test += "Buzz"
            if test == "":
                test = str(i)
            output.append(test)
        return output
      
