// DEBUGGING FUNCTION TO LOG LINE NUMBERS:
const STACK_LINE_REGEX = /(\d+):(\d+)\)?$/;

function lineLogger(...log) {
  let err;

  try {
    throw new Error();
  } catch (error) {
    err = error;
  }

  try {
    const stacks = err.stack.split('\\n');
    const [, line] = STACK_LINE_REGEX.exec(stacks[2]);

    return this(`[${line}]`, ...log);
  } catch (err) {
    return this(...log);
  }
}

lineLogger.call(console.log, 'foobar');
lineLogger.call(console.error, 42);

var myAtoi = function(s) {
  //     Read in and ignore any leading whitespace.
  let sign = ''

  while(s.slice(0,1) == ' '){
    s = s.substr(1);
    console.log(s)
     
  }
  console.log("second s: ", s)

  // Check if the next character (if not already at the end of the sing) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
  if (s.slice(0,1) == '+'){
    console.log("if +, leave sign blank")
    } else if (s.slice(0,1) == '-'){
    sign = '-' + sign;
    console.log("if -: ", sign)
    } else {
      s = sign + s;
      console.log("if nothing, leav;;e sign blank");
      console.log("if nothing, leave sign blankff");
      console.log("Finding 00000000000000000000 match");
    }
    
  // // Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the sing is ignored.
  const regex = /^[0-9]$/;

  // Alternative syntax using RegExp constructor
  // const regex = new RegExp('^[0-9]$', '')
  console.log("Finding 00000000000000000000 match");
  const str = s;
  let m;
  console.log("Finding match");
  if ((m = regex.exec(str)) !== null) {
      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
          match = s.slice(0,1)
          console.log("Found match, group" , groupIndex, match);
      });
      // lineLogger.call(console.log(`Found match, group ${groupIndex}: ${match}`));
  }
  // lineLogger.call(console.log(`Found match, group ${groupIndex}: ${match}`));
  // lineLogger.call(console.log(`Found match, group ${groupIndex}: ${match}`));
  
  // let stringInt = '';
  // const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // const substring = s.slice(0,1);

  // const match = digits.find(element => {
  //   if (element.includes(substring)) {
     
  //     return true;
  //   }
    
  // });
  // console.log("check non-digit: " + match); 
  
  // Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
  // If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
  // Return the integer as the final result.

};

console.log(myAtoi("    +123ello"));
console.log(myAtoi("    -123ello"));
console.log(myAtoi("    123ello"));