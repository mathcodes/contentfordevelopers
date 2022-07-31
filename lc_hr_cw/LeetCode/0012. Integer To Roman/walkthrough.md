# intToRoman

## Pseudocode
Declare three variables, two arrays (dict and val) and an empty string (result). `dict` are the roman numerals for the values of the corresponding indices in the `val` array. The `val` array should contain
1\*10^x, 4\*10^x, 5\*10^x, 9\*10^x for x = [0, 1, 2], and 1000. 

The function takes in a num to change to a roman numeral. The first for loop will compare this num to each value in the `val` array and only execute when num >= val. 

Then we will create a `count` variable that returns the base of num/v `parseInt(21/10)=2`. This will tell us how many values from `dict` we will add to the string later on.

We will also need the remainder, or the rest of the number to turn into Roman Numerals once we are finished with this place value. We can do this using `num %= v` which is equivalent to `num = num % v`.

`21 = 21 % 10 = 1`

So our new `num` = `1`. 

The last part is the nested J FOR LOOP, which pulls out the Roman Numeral value while `j > count`. So using our example where `21` is our original `num`, we have `2` as our count, so we execute the loop twice (where j=0, and j=1) to pull out two `X`'s since dict[i]="X". We assign our string to a variable (`result`)and append to it each time this loop runs. It will only run up to 4 times since Roman Numeral notation allows for 3 of the smallest place value until it substracts it from the higher place value (I, II, III, IV, V).

And we go back and repeat this process from the top. 

as well as their multiples of 10 up to 1000.