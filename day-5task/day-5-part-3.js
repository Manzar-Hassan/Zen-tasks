let arr = [1,2,3,34,5,6,7,8,9,0,10,11,12,13,14,15,16,17]
let str = ['guvi','zen','tamil','batch','class','madam','aaa','man','mam']
let str1 = [...str]

//a> Print odd numbers in an array
const oddnum = arr => {
  let res = [];

  for(let i=0; i<arr.length; i++) {
    if(arr[i]%2 !== 0) res.push(arr[i]);
  }

  return res;
}

console.log(oddnum(arr))

//b> Convert all the strings to title caps in a string array
const titleCaps = str => {
  for(let i=0; i<str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase()
  }

  return str;
}

console.log(titleCaps(str))

//c> Sum of all numbers in an array

const sum = arr.reduce((a,ele) => a + ele);

console.log(sum)

//d> Return all the prime numbers in an array
const isPrime = (n) => {

  if(n<2) return false

  for(let i=0; i<n; i++) {
    if(n%2===0) return false;
  }
  return true;
}

arr.forEach(num => {if(isPrime(num)) console.log(num)})

//e> Return all the palindromes in an array
const isPalindrome = (str) => {
  let reverse = str.split('').reverse().join('');

  if(str===reverse) return true;
  return false
}

for(let i=0; i<str1.length; i++) {
  if(isPalindrome(str1[i])) console.log(str1[i])
}