// find the peak number

// then find the next largest number to the right of the peak number

// then swap the peak number and the next largest number to the right of the peak number

// reverse from peak to end of the array

//  Let's try it on this array:

const arr = [1, 5, 8, 4, 7, 6, 5, 1];
// find the peak number - start at the end and iterate through: 
// arr.length - 1 = 7, value = 1, so is 1> 3 no, is 3 > 5 no, is 5 > 6 no, is 6 > 7 no is 7 > 6  SO 7 is peak:

// const arr = [1, 5, 8, 4, 7, 6, 5, 1];
                      // -1 P 
Iterate agaain to get new peak where 8 is P and 5 is-1, 8 is peak  
// then find the next largest number to the right of the peak number

// then swap the peak number and the next largest number to the right of the peak number

// reverse from peak to end of the array