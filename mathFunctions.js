//1. Write a JavaScript function to convert a binary number to a decimal number.

function bnrToDcml(bstr) { 
    return parseInt((bstr + '').replace(/[^01]/gi, ''), 2);
};
console.log(bnrToDlmc('110001'));
console.log(bnrToDcml('100'));

//2. Write a JavaScript function to convert a number from one base to another (base between 2 and 36).

var baseConverting = function(number, initialBase, changeBase) {
    if ((initialBase && changeBase) <2 || (initialBase && changeBase)>36)
     return 'Base between 2 and 36';
    
    return parseInt(number + '', initialBase).toString(changeBase);
};
console.log(baseConv('E164',16,8));
console.log(baseConvert(3000,2,8));

//3. Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number. 

decToBhho  = function(n, base) {
 
    if (n < 0) {
      n = 0xFFFFFFFF + n + 1;
    } 

switch (base){  
case 'B':  
return parseInt(n, 10).toString(2);
break;  
case 'H':  
return parseInt(n, 10).toString(16);
break;  
case 'O':  
return parseInt(n, 10).toString(8);
break;  
default:  
return("Wrong input.........");  
}  
};
console.log(decToBho(130,'B'));
console.log(decToBhho(130,'H'));
console.log(decToBhho(130,'O'));


//4. Write a JavaScript function to generate a random integer.

randomInteger = function(min, max) {
    if (min==null && max==null)
      return 0;    
    
    if (max == null) {
        max = min;
        min = 0;
    }
  return min + Math.floor(Math.random() * (max - min + 1));
};
console.log(randomInteger(40,1));
console.log(randomInteger(1,10));
console.log(randomInteger(8));
console.log(randomInteger());

//5. Write a JavaScript function to format a number up to specified decimal places.

function decimalNumbers(n, d) {
    if ((typeof n !== 'number') || (typeof d !== 'number'))
      return false;
           n = parseFloat(n) || 0;
    return n.toFixed(d);
};
console.log(decimalNumbers(2.100212, 2));
console.log(decimalNumbers(2.100112, 3));
console.log(decimalNumbers(2200, 2));

//6. Write a JavaScript function to find the highest value in an array.

function find_max(input) {
    if (toString.call(input) !== "[object Array]")  
      return false;
 return Math.max.apply(null, input);
};
console.log(find_max([12,34,56,'1']));
console.log(fi_max([-12,-34,0,-56,-1]));

//7. Write a JavaScript function to find the lowest value in an array.

function find_min(input) {
    if (toString.call(input) !== "[object Array]")  
      return false;
 return Math.min.apply(null, input);
};
console.log(find_min([12,36,54,1]));
console.log(find_min([-12,-34,0,-56,-1]));

//8. Write a JavaScript function to get the greatest common divisor (gcd) of two integers.

function gcd_Two_Numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
  return x;
}; 
console.log(gcdtwonumbers(14, 15));
console.log(gcd_TwoNumbers(9, 3));

//9. Write a JavaScript function to find the GCD (greatest common divisor) of more than 2 integers.

function gcdMoreThanTwoNums(input) {
    if (toString.call(input) !== "[object Array]")  
          return  false;  
    var len, a, b;
      len = input.length;
      if ( !len ) {
          return null;
      }
      a = input[ 0 ];
      for ( var i = 1; i < len; i++ ) {
          b = input[ i ];
          a = gcdTwoNumbers( a, b );
      }
  return a;
};
  
function gcdTwoNumbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
  return x;
};
console.log(gcdMoreThanTwoNumb([1,13,25]));
console.log(gcdMoreThanTwoNumbers([5,10,15,25]));
  
//10. Write a JavaScript function to get the least common multiple (LCM) of two numbers.

function lcm_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
     return false;
  return (!x || !y) ? 0 : Math.abs((x * y) / gcdTwoNumbers(x, y));
};
 
function gcdTwoNumbers(x, y) {
   x = Math.abs(x);
   y = Math.abs(y);
   while(y) {
     var t = y;
     y = x % y;
     x = t;
   }
  return x;
};
console.log(lcm_two_numbers(5,21));
console.log(lcm_two_numbers(10,15));