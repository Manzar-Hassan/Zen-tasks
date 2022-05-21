//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.
const addFive = function (num) {
  return num+5;
}

console.log(addFive(5))
console.log(addFive(0))
console.log(addFive(-5))

//Write a function called “getOpposite”.
// Given a number, return its opposite
const getOpposite = function (num) {
  if(num===0) return 0;

  if(Number.isInteger(num)) {
    return (num*-1);

  } else return -1;
}

console.log(getOpposite(5))
console.log(getOpposite(0))
console.log(getOpposite(-5))
console.log(getOpposite('5a'))
console.log(getOpposite(5.5))

//Fill in your code that takes an number minutes and converts it to seconds.
function toSeconds(minute) {
  return minute*60;
}

console.log(toSeconds(5))
console.log(toSeconds(3))
console.log(toSeconds(2))

//Create a function that takes a string and returns it as an integer.
const toInteger = function(str) {
  return parseInt(str);
}

console.log(toInteger('6'))
console.log(toInteger('1000'))
console.log(toInteger('12'))

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function nextNumber(myint) {
  return parseInt(myint)+1;
}

console.log(nextNumber(0))
console.log(nextNumber(9))
console.log(nextNumber(-3))

//Create a function that takes an array and returns the first element.
function getFirstElement(arr) {
  return arr[0];
}

console.log(getFirstElement([1, 2, 3]))
console.log(getFirstElement([80, 5, 100]))
console.log(getFirstElement([-500, 0, 50]))

//Convert Hours into Seconds Write a function that converts hours into seconds.
function hourToSeconds(hour) {
  return hour*60*60;
}

console.log(hourToSeconds(2))
console.log(hourToSeconds(10))
console.log(hourToSeconds(24))

//Find the Perimeter of a Rectangle Create a function that takes height and width and finds the perimeter of a rectangle.
function findPerimeter(num1,num2) {
  return 2*(num1 + num2);
}

console.log(findPerimeter(6, 7))
console.log(findPerimeter(20, 10))
console.log(findPerimeter(2, 9))

//Less Than 100? Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1,num2) {
  if(num1+num2 < 100) {
    return true;

  } else return false;
}

console.log(lessThan100(22, 15))
console.log(lessThan100(84,34))

//There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
//Two numbers are passed as parameters. The first parameter divided by the second parameter
// will have a remainder, possibly zero. Return that value.
function remainder(num1,num2) {
  return num1%num2 ;
}

console.log(remainder(1, 3))
console.log(remainder(3, 4))
console.log(remainder(-9, 45))
console.log(remainder(5, 5))

//Old macdonald had a farm:
// MacDonald is asking you to tell him how many legs can be counted among 
// all his animals. The farmer breeds three species:
function CountAnimals(tur,horse,pigs) {
  return (tur*2)+(horse*4)+(pigs*4);
}

console.log(CountAnimals(2, 3, 5))
console.log(CountAnimals(1, 2, 3))
console.log(CountAnimals(5, 2, 8))

//Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames(num1,num2) {
  return 60*num1*num2;
}

console.log(frames(1,1))
console.log(frames(10,1))
console.log(frames(10, 25))

//Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(num1) {
  return num1%5 === 0;
}

console.log(divisibleByFive(5))
console.log(divisibleByFive(-55))
console.log(divisibleByFive(-37))

//Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.
function isEven(num) {
  if(Number.isInteger(num)) {
    if(num%2===0) return true;
    else return false;

  } else return -1;
}

console.log(isEven(12))
console.log(isEven(0))
console.log(isEven(11))
console.log(isEven('11h'))

//Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
function areBothOdd(num1, num2) {
  if(num1%2 !==0 && num2%2 !== 0) return true;
  return false;
}

console.log(areBothOdd(1, 3))
console.log(areBothOdd(1, 4))
console.log(areBothOdd(2, 3))
console.log(areBothOdd(0, 0))

//Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string with the given 
// first and last names separated by a single space.
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(getFullName("GUVI","GEEK"))
console.log(getFullName("GUVI",""))
console.log(getFullName("","GEEK"))
console.log(getFullName("",""))

//Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.
function getLengthOfWord(word1) {
  if(word1 !== Number(word1) && word1 !== Boolean(word1)) {
    return word1.length;

  } return -1;
}

console.log(getLengthOfWord("GUVI"))
console.log(getLengthOfWord(""))
console.log(getLengthOfWord(-1))
console.log(getLengthOfWord(9))

//Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.
function isSameLength(word1, word2) {
  return word1.length === word2.length;
}

console.log(isSameLength("GUVI","GEEK"))

//Create a function to calculate the distance between two points defined by their x, y coordinates
function getNthElement(array,n) {
  return array[n];
}

console.log(getNthElement([1, 3, 5], 1))

//Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array. If the
// given array has a length of 0, it should return ‘-1’.
function getLastElement(array) {
  return array[array.length-1];
}

console.log(getLastElement([1, 2, 3, 4]))

//Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. 
// If there is no property at the given key, it should return undefined.
function getProperty(obj, key) {
  return obj[key];
}
var obj = {
  mykey: "value"
  };

console.log(getProperty(obj,'mykey'))
console.log(getProperty(obj,'dummykey'))

//Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
var Obj = {}

function addProperty(obj, key) {
  if(!obj[key]) obj[key] = true;
  return Obj;
}

console.log(addProperty(Obj,'mykey'))

//Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.
function removeProperty(obj, key) {
  return delete obj[key];
}

console.log(removeProperty(obj,'name'))

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let sumEven = 0;
let sumOdd = 0;

function countPositivesSumNegatives(arr) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i]<0) sumOdd += arr[i];
    else sumEven += arr[i];
  }
  return `${sumEven} ${sumOdd}`;
}

console.log(countPositivesSumNegatives(arr));

//Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar) {
  let res = []
  for(let i=0; i<ar.length; i++) {
    if(arr[i]%2===0) res.push(arr[i]);
  }
  return res.join(' ')
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);

//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
function powersOfTwo(n) {
  let res = [];
  let pow = 1

  for(let i=0; i<n; i++) {
    res.push(pow);
    pow = pow*2;
  }
  return res.join(' ');
}

console.log(powersOfTwo(3))

//Find the maximum number in an array of numbers
function findMax(ar) {
  let max = -Infinity;

  for(let i=0; i<ar.length; i++) {
    if(ar[i]>max) max = ar[i];
  }
  return max;
}

var arrr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var maximumm = findMax(arrr);
console.log('Max: ', maximumm);

//Print the first 100 prime numbers
printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n+1, ' → ', i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n)
{
  if(n<2) return false

 for(let i=2; i<n; i++) {
   if(n%i===0) return false
 }
 return true;
}

printPrimes(100)

//Create a function that will return in an array the first “nPrimes” 
// prime numbers greater than a particular number “startAt”
console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
  let res = [];
  let num = 1;

  while(num<=nPrimes) {
    if(isPrime(startAt)) {
      res.push(startAt);
      startAt++;
      num++;

    } else startAt++;
  }
  return res;
}
// Returns true if a number is prime
function isPrime(n)
{
  if(n<2) return false;

  for(let i=2; i<n; i++) {
    if(n%2===0) return false
  }
  return true;
}

//Reverse a string

function reverseString(s) {
  s = s.split('');

  for(let i=0; i<(parseInt(s.length/2)); i++) {
    [s[i], s[s.length-i-1]] =[s[s.length-i-1], s[i]]
  }
  return s.join('')
}

console.log(reverseString('result'))

//Create a function that will merge two arrays and return the result as a new array
let ar1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arrrr = mergeArrays(ar1, arr2);
console.log(arrrr);
function mergeArrays(ar1, arr2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }

 for(let i=0; i<arr2.length; i++) {
   result[i] = result[i] + arr2[i]
 }

 return result;
}

//Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV('1.5,2.3,3.1,4,5.5,6,7,8,9,10.9'));
function sumCSV(s)
{
  s = s.split(',').map(str => parseInt(str));
  let sum = 0;

  for(let i=0; i<s.length; i++) {
    sum = sum + s[i]
  }
  return sum
}