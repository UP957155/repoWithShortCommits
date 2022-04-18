//1. Write a JavaScript function to get the least common multiple (LCM) of more than 2 integers.

function lcm_more_than_two_numbers(inputArray) {
    if (toString.call(inputArray) !== "[object Array]")  
        return  false;  
 var r1 = 0, r2 = 0;
    var l = inputArray.length;
    for(i=0;i<l;i++) {
        r1 = inputArray[i] % inputArray[i + 1];
        if(r1 === 0) {
            inputArray[i + 1] = (inputArray[i] * inputArray[i+1]) / inputArray[i + 1];
        }
        else {
            r2 = inputArray[i + 1] % r1;
            if(r2 === 0) {
                inputArray[i + 1] = (inputArray[i] * inputArray[i + 1]) / r1;
            }
            else {
                inputArray[i+1] = (inputArray[i] * inputArray[i + 1]) / r2;
            }
        }
    }
  return inputArray[l - 1];
};
console.log(lcm_more_than_two_numbers([100,89,75,7])); 
console.log(lcm_more_than_two_numbers([5,10,15,25]));

//2. Write a JavaScript function to find out if a number is a natural number or not.

function is_natural(n) {
	   if (typeof n !== 'number') 
	        return 'Not a number'; 
			
	return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
};
console.log(isNature(-13));
console.log(is_Natural(1));
console.log(isNatural(10.22));
console.log(is_Nature(10/0));

//3. Write a JavaScript function to test if a number is a power of 2.

function isPowerOf2(n) {
    if (typeof n !== 'number') 
         return 'Not a number'; 
   
  return n && (n & (n - 1)) === 0;
};
console.log(is_powerOf2(18));
console.log(ispower_Of2(20));
console.log(isPowerOf2(256));
   
//4. Write a JavaScript function to round a number to a given decimal places.

//Ref.https://bit.ly/3zxAhnH

function precise_round(n, r) {
    let int = Math.floor(n).toString()
    if (typeof n !== 'number' || typeof r !== 'number') return 'Not a Number'
    if (int[0] == '-' || int[0] == '+') int = int.slice(int[1], int.length)
    return n.toPrecision(int.length + r)
}
console.log(precise_round(12.575,2));
console.log(precise_round(-10.3075499, 5));
console.log(precise_round(10.49999,0));
console.log(precise_round(10.49999,2));

//5. Write a JavaScript function to check whether a value is an integer or not.

function isInt(num) {
  
    if (typeof num !== 'number')
        return false; 
   
   return !isNaN(num) && 
          parseInt(Number(num)) == num && 
          !isNaN(parseInt(num, 10));
};
console.log(isInt(23));
console.log(isInt(4e2));
console.log(isInt(NaN));
console.log(isInt(23.75));
console.log(isInt(-23));
 
//6. Write a JavaScript function to check to check whether a variable is numeric or not.

function isNumeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};
  
console.log(isNumeric(12));
console.log(isNumeric('abcd'));
console.log(isNumeric('12'));
console.log(isNumeric(' '));
console.log(isNumeric(1.20));
console.log(isNumeric(-200));

//7. Write a JavaScript function to calculate the sum of values in an array.

function sum(input){
             
    if (toString.call(input) !== "[object Array]")
       return false;
         
               var total =  0;
               for(var i=0;i<input.length;i++)
                 {                  
                   if(isNaN(input[i])){
                   continue;
                    }
                     total += Number(input[i]);
                  }
  return total;
};
console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));

//8. Write a JavaScript function to calculate the product of values in an array.

function product(input){
    if (toString.call(input) !== "[object Array]")
       return false;
     
            var total   =   1;
     
          for(var i=0;i<input.length;i++){
                  if(isNaN(input[i])){
                    continue;
                  }
                   total   *=  Number(input[i]);
               }
  return total;
};
console.log(product([1,2,3]));
console.log(product([100,-200,3]));
console.log(product([1,2,'a',3]));
   
//9. Create a Pythagorean function in JavaScript.

function pythagorean(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
        return false; 
  return Math.sqrt(x * x + y * y);
};
console.log(pythagorean(2, 4));
console.log(pythagorean(3, 4));


//10. Write a JavaScript program to evaluate binomial coefficients.

function binomial(n, k) {
    if ((typeof n !== 'number') || (typeof k !== 'number')) 
        return false; 
   var coeff = 1;
   for (var x = n-k+1; x <= n; x++) coeff *= x;
   for (x = 1; x <= k; x++) coeff /= x;
   return coeff;
};
console.log(binomial(8,3));
console.log(binomial(10,2));