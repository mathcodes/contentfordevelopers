// PSEUDO CODE:
// Set a count variable to zero, which represents the sea level
//
// For every step taken, change the count:
// --> If the hiker goes up, increase the count by 1
// --> If the hiker goes down, decrease the count by 1
//
// Since we are concerned about the valley, and not the mountan:
// --> If there is an upward movement and the count is at zero (which depicts sea level), the valley has just been traversed
// --> This is so because, a valley ends with a "step-up" to sea level
//
// Read on loops, if statements, and arrow functions

let numberOfValleys = (steps, path) => {
  let count = 0;
  let numberOfValleysTraversed = 0;
  for (let i = 0; i < steps; i++) {
    if (path.charAt(i) == "U") count++;
    if (path.charAt(i) == "D") count--;
    if (path.charAt(i) == "U" && count == 0) numberOfValleysTraversed++;
  }

  return numberOfValleysTraversed;
};

console.log(numberOfValleys(8, "DDUUUUDD"));
