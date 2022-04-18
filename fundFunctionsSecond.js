//1. Write a JavaScript program to generate a random hexadecimal color code.

//#Source https://bit.ly/2neWfJ2

const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};
console.log(randomHexColorCode())

//2. Write a JavaScript program to removes non-printable ASCII characters from a given string.

//#Source https://bit.ly/2neWfJ2

const removeNonASCII = str => str.replace(/[^\x20-\x7E]/g, '');
console.log(removeNonASCII('äÄçÇéÉêw3resouröceÖÐþúÚ'));

//3. Write a JavaScript program to convert the length of a given string in bytes.

//#Source https://bit.ly/2neWfJ2

const byteSize = str => new Blob([str]).size;
console.log(byteSize('123456'));  
console.log(byteSize('Hello World'));  
console.log(byteSize('Ã¢')); 

//4. Write a JavaScript program to replace the names of multiple object keys with the values provided.

//#Source https://bit.ly/2neWfJ2 
const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );
const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
console.log("Original Object");
console.log(obj);
console.log("-------------------------------------");
result = renameKeys({ name: 'firstName', job: 'Actor' }, obj);
console.log("New Object");
console.log(result);

//5. Write a JavaScript program to return the minimum-maximum value of an array, after applying the provided function to set comparing rule.

//#Source https://bit.ly/2neWfJ2

const reduceWhich = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
console.log(reduceWhich([1, 3, 2])); 
console.log(reduceWhich([10, 30, 20], (a, b) => b - a));  
console.log(reduceWhich(
  [{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }],
  (a, b) => a.age - b.age)); 

//6. Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

//#Source https://bit.ly/2neWfJ2

const all = (arr, fn = Boolean) => arr.every(fn);
console.log(all([4, 2, 3], x => x > 1)); 
console.log(all([4, 2, 3], x => x < 1));
console.log(all([1, 2, 3])); 

//7. Write a JavaScript program to split values of two given arrays into two groups. If an element in filter is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

//#Source https://bit.ly/2neWfJ2

const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
console.log(bifurcate([1, 2, 3, 4], [true, true, false, true]));
console.log(bifurcate([1, 2, 3, 4], [true, true, true, true]));
console.log(bifurcate([1, 2, 3, 4], [false, false, false, false]));

//8. Write a JavaScript program to remove specified elements from the left of a given array of elements.

//#Source https://bit.ly/2neWfJ2

function removeFromLeft(arr, n = 1){
    return arr.slice(n); 
  }
  console.log(removeFromLeft([1, 2, 3]));
  console.log(removeFromLeft([1, 2, 3], 1));
  console.log(removeFromLeft([1, 2, 3], 2));
  console.log(removeFromLeft([1, 2, 3], 4));

//9. Write a JavaScript program to remove specified elements from the right of a given array of elements.

//#Source https://bit.ly/2neWfJ2

function removeFromRight(arr, n = -1){
    return arr.slice(n); 
};
console.log(removeFromRight([1, 2, 3]));
console.log(removeFromRight([1, 2, 3], -1));
console.log(removeFromRight([1, 2, 3], -2));
console.log(removeFromRight([1, 2, 3], -4));
  
//10. Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.

//#Source https://bit.ly/2neWfJ2

const extendHex = shortHex =>
  '#' +
  shortHex
    .slice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map(x => x + x)
    .join('');

console.log(extendHex('#03f'));
console.log(extendHex('05a'));
