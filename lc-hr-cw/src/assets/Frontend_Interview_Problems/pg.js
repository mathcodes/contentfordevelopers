const guitars = ['PRS', 'Guild', 'Ibanez', 'Fender', 'Gibson'];

console.log(guitars.slice(4)); // ["Gibson"]

console.log(guitars.slice(2)); // ["Ibanez", "Fender", "Gibson"]

console.log(guitars.slice(2, 4)); // ["Ibanez", "Fender"]

console.log(guitars.slice(1, 5)); // ["Guild", "Ibanez", "Fender", "Gibson"]

console.log(guitars.slice(-2)); // ["Fender", "Gibson"]

console.log(guitars.slice(2, -1)); // ["Ibanez", "Fender"]

console.log(guitars.slice()); // ["PRS", "Guild", "Ibanez", "Fender", "Gibson"]