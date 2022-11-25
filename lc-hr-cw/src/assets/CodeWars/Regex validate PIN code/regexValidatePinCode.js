function validatePIN (pin) {
  //   So the meat of this problem is understanding how to generate the hex code to keep the pins with length of 4 or 6.
  //   IF we break this up, it becomes pretty clear whats going on:
  //   /^(\d{4}|\d{6})$/   ==>  /^  (  \d{4}   |  \d{6} )  $  /
      return /^(\d{4}|\d{6})$/.test(pin);
  }