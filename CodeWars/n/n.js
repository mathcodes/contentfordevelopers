const format_duration = number => {
  if (parseInt(number) && number > 0) {
    // breakpoints: 60 seconds in a minute, 3600 seconds in an hour, etc.
    const bp = [60, 3600, 86400, 31536000, Number.MAX_VALUE];
    const units = ["second", 'minute', 'hour', 'day', 'year'];
    let solution = [];
    for (let x = 0; x < bp.length; x++) {
      if (number % bp[x] !== 0) {
        const value = Math.floor((number % bp[x]) / (bp[x-1] || 1));
        solution.push(`${value} ${units[x]}${value > 1 ? 's' : ''}`);
        number -= number % bp[x];
      }
    }

    // edge case: the value was too large and the modulus was considered 0
    if (number > 0) solution.push(`${number} years`)

    // add the "and" for the last element (because Oxford comma and cheating)
    solution[0] = "and " + solution[0];

    console.log(solution.reverse().join(', '))
    return solution.reverse().join(', ');
  }
  return "Invalid number";
}

format_duration(2400322)
format_duration(153251)
format_duration(234)
format_duration(2)