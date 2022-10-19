const format_duration = number => {
  if (parseInt(number) && number > 0) { // // if number is a positive integer
    // breakpoints: 60 seconds in a minute, 3600 seconds in an hour, etc.
    const bp = [60, 3600, 86400, 31536000, Number.MAX_VALUE]; 
    const units = ["second", 'minute', 'hour', 'day', 'year'];// units
    let solution = []; // solution array
    for (let x = 0; x < bp.length; x++) { // // loop through breakpoints
      if (number % bp[x] !== 0) { // // if number is not divisible by breakpoint
        let numModBP =  number % bp[x]; // get remainder of number divided by breakpoint
        console.log("numModBP: " + numModBP) // debug
        let prevBP =  bp[x-1];    // get previous breakpoint
        console.log("prevBP: " + prevBP) // debug
        const value = Math.floor( // get value of number divided by breakpoint
          (number % bp[x]) / (bp[x-1] || 1)); // get value of number divided by breakpoint

        solution.push(`${value} ${units[x]}${value > 1 ? 's' : ''}`);     // push value to solution

        number -= number % bp[x]; // subtract remainder from number
      }
    }

    // edge case: the value was too large and the modulus was considered 0
    if (number > 0) solution.push(`${number} years`)

    // add the "and" for the last element (because Oxford comma and cheating)
    solution[0] = "and " + solution[0]; 

    console.log(solution.reverse().join(', ')) // debug
    return solution.reverse().join(', '); // return solution
  }
  return "Invalid number";  // return error message
}

format_duration(2400322)
format_duration(153251)
format_duration(234)
format_duration(2)

