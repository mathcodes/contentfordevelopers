// PROBLEM
// Before the optional chaining operator (?.) existed, it was sometimes troublesome to access deeply-nested properties in huge JavaScript objects when some of the intermediate properties might not be present.

// SOLUTION 
// The first step is to split up the path by the delimiter, which is a period. 
// Then we have to recursively traverse the object given each tokens in the path, 
// which can be done either with while/for loops or recursions. The looping should stop when a null-ish value is occurred.

// Array index accessing doesn't require special handling and can be treated like accessing string-based fields on objects.

export default function get(objectParam, pathParam, defaultValue) {
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split('.');// The first step is to split up the path by the delimiter, which is a period. 

  let index = 0;
  let length = path.length;
  let object = objectParam;

  while (object != null && index < length) {// Then we have to recursively traverse the object given each tokens in the path, 
    object = object[String(path[index])]; // which can be done either with while/for loops or recursions. The looping should stop when a null-ish value is occurred.
    index++;
  }

  const value = index && index === length ? object : undefined;
  return value !== undefined ? value : defaultValue;
}