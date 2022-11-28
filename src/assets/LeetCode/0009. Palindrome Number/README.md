# Ternary Operators... cleaning code 88 bits at time...

### Would you agree that most people learning JS wrote their if else statements like so, separating the condition from the body with line breaks? I thought you might. Great.
```js
if (reverseX == x) {
  console.log(true);
} else {
  console.log(false);
}
```

### We can actually write that as one-line of code (NOTE: )

```js
if( reverseX==x ){ console.log(true); } else{ console.log(false); }
```

# The Ternary Steps In
### In comes our `ternary` to shave off some more minimal space consumption and just pretty, concise, yet powerful code using two `just` operators.
```js
reverseX==x ? console.log(true) : console.log(false);
```

### So technically there is only a 11-character difference between the two lines of code. But that `is` 11 characters, or 11 * 8 = ***`88 bits`***. 

