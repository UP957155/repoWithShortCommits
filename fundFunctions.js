//1. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

//#Source https://bit.ly/2neWfJ2

const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false

//2. Write a JavaScript program to copy a string to the clipboard.

//#Source https://bit.ly/2neWfJ2

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
};

//3. Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array.

//#Source https://bit.ly/2neWfJ2

const csvToArray = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));

console.log(csvToArray('a,b\nc,d')); 
console.log(csvToArray('a;b\nc;d', ';')); 
console.log(csvToArray('head1,head2\na,b\nc,d', ',', true));

//4. Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array of objects. The first row of the string is used as the title row.

//#Source https://bit.ly/2neWfJ2

const CSVtoJSON = (data, delimiter = ',') => {
    const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
    return data
      .slice(data.indexOf('\n') + 1)
      .split('\n')
      .map(v => {
        const values = v.split(delimiter);
        return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
      });
};
console.log(CSVtoJSON('col1,col2\na,b\nc,d'));
console.log(CSVtoJSON('col1;col2\na;b\nc;d', ';'));

//5. Write a JavaScript program to convert an array of objects to a comma-separated values (CSV) string that contains only the columns specified.

//#Source https://bit.ly/2neWfJ2

const JSONtoCSV = (arr, columns, delimiter = ',') =>
  [
    columns.join(delimiter),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
        ''
      )
    )
  ].join('\n');

console.log(JSONtoCSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y']));
console.log(JSONtoCSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y'], ';'));

//6. Write a JavaScript program to target a given value in a nested JSON object, based on the given key.

//#Source https://bit.ly/2neWfJ2

const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return dig(val, target);
      }, undefined);

const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};

const dog = {
    "status": "success",
    "message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
}
console.log(dig(data, 'level3'));
console.log(dig(data, 'level4'));
console.log(dig(dog, 'message'));

//7. Write a JavaScript program to converts a specified number to an array of digits.

const digitize = n => [...`${n}`].map(i => parseInt(i));
console.log(digitize(123));
console.log(digitize(1230));

//8. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without the filtered values.

//#Source https://bit.ly/2neWfJ2

const pull = (arr, ...args) => {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    let pulled = arr.filter((v, i) => !argState.includes(v));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return pulled;
};
let AAR1 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(AAR1, 'a', 'c'));
let ARR2 =  ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(ARR2, 'b'));
  
//9. Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.

//#Source https://bit.ly/2neWfJ2

const powerSet = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
console.log(powerSet([1, 2]));
console.log(powerSet([1, 2, 3]));
console.log(powerSet([1, 2, 3, 4]));

//10. Write a JavaScript program to extract out the values at the specified indexes from a specified array.

//#Source https://bit.ly/2neWfJ2

const pullAtIndex = (arr, pullArr) => {
    let removed = [];
    let pulled = arr
      .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
      .filter((v, i) => !pullArr.includes(i));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return removed;
};
let arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(pullAtIndex(arr1, [1, 3]));
let arr2 =  [1, 2, 3, 4, 5, 6, 7];
console.log(pullAtIndex(arr2, [4]));
  
