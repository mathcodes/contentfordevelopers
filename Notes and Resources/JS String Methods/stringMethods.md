## .charAt() — Returns the character at an index
The charAt() function returns the string character at a given index.
 
## .charCodeAt() —Return the unicode at an index
The charCodeAt() method returns the unicode of the character at a specified index in a string. This an UTF-16 cone integer between 0 and 65535.

## .includes() — Determine if string contains substring
The includes() function determines if a substring is contained in a larger string and returns true or false. This has many applications, but one common use-case is for string matching for searching/parsing.
 
## .indexOf() — Finding the index of a substring
Before includes() was introduced to the JavaScript spec, indexOf() was the primary way you would check if a substring existed in a string. It is likely you will still see code that uses indexOf, so understanding how it works is important. The function returns the index of the substring within the string. If the substring is not contained in the original string, it will return -1.
 
The common pattern for indexOf() which mimics the behavior of includes() which is to check if the index is greater than -1:

## .length — Finding the length of the string
Returns the number of characters that the string contains.

```js
let string = "I am a string";
console.log(string.length); // returns 13
```

## .match() — Returns array of matching strings
Returns the matches when comparing a string against a regular expression (regex). In the example shown, [0-9] is a regex that matches any number between 0 and 9.

```js
let string = "This is string 1, and the next one is 2.";
let regex = /[0-9]/g;
let matches = string.match(regex);
console.log(matches); // returns [ '1', '2' ]
```
 

 
## .repeat() — Repeats a string a specified number of times
The repeat() function returns a string consisting of the elements of the object repeated the given number of times.

## .replace() — Replaces strings with new values
The replace() function is called on a string and will return a string with a pattern replaced by a replacement string. It takes either a regex or a string as the pattern. With a regex you can globally replace all matches (using the g option), but with a string it will only replace the first occurrence. In the example below, you will notice that world is replaced only once in the first call since it uses a string pattern.
 
## .slice() — Return a section of a string
The slice() method will extract a section of a string based on the Takes in an index supplied and return it as a new string. This is useful when you know the structure of a string and want to retrieve a certain portion, or it can be used with the indexOf method which we learned earlier where you can find the index of the first occurrence of a substring and use that as a reference point for slicing.
 
slice() takes the beginning index as the first parameter and an optional ending index as the second parameter — str.slice(beginIndex[, endIndex]). If no ending index is supplied, it slices to the end of the string starting with your beginIndex. If a negative beginIndex is used, it will slice backwards from the end of the string. The following is an example from MDN which depicts these cases.
 
## .split() — Converts string into an array of strings
Takes a separator which serves as a splitter of strings, returing the array of strings, as shown:

```js
let string = "Th.is. .is. .str.ing 1, and. the ne.xt on.e is 2.";
let regex = /[. ]/g;
let matches = string.split(regex);
console.log(matches); // returns [ 'Th', 'is', 'is', 'str', 'ing', '1', 'and', 'the', 'ne', 'xt', 'one', 'is', '2' ]
```


 
## .toUpperCase() — Capitalizes entire string
Returns a string with all upper case letters, as shown:
 
## .toLowerCase() — Lower cases entire string
Returns a string with all lower case letters, as shown:

```js
let string = "I AM A STRING";
console.log(string.toLowerCase()); // returns "i am a string"
```
 
## .trim() — Removing white space
Removes white space from the beginning and end of a string, as shown:

```js
let string = "   This is a string   ";
console.log(string.trim()); // returns "This is a string"
```



 


 
## Conclusion
This list covers an essential list of string methods used in JavaScript. . Methods not covered in this list include lastIndexOf, search, substring, substr, concat, localeCompare, and others. It’s not that these functions are not important, but they are not core methods utilized in JavaScript, and you are much less likely to see or need them. For a more comprehensive list, refer to the MDN string documentation.
If you found this article helpful, please tap the 👏. Follow me for more articles on React, JavaScript, and open source software! You can also find me on Twitter or gitconnected.

