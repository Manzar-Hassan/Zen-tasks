let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

//a> prints odd numbers in an array
const odd = function (num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      console.log(num[i]);
    }
  }
};

odd(arr);

//b> Convert all the strings to title caps in a string array
let str = ["geek", "meek", "mon", "soM"];
let strRes = [];

const titleCaps = function (str) {
  for (let i = 0; i < str.length; i++) {
    let titlecap = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
    strRes.push(titlecap);
  }
};

console.log(titleCaps(str));

//c> Sum of all numbers in an array
let sum = function (num) {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
};

console.log(sum(arr));

//d> Return all the prime numbers in an array
const checkPrime = function (num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

arr.forEach((num) => {
  if (checkPrime(num)) console.log(num);
});

//e> Return all the palindromes in an array
const isPalindrome = function (str) {
  if (str.length === 0) return false;
  if (str.lrngth === 1) return true;

  str = str.toString().split("");

  for (let i = 0; i < parseInt(str.length / 2); i++) {
    if (str[i] === str[str.length - i - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

arr.forEach((num) => {
  if (isPalindrome(num)) console.log(num);
});

// f> Return median of two sorted arrays of the same size
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [-5, -3, 0, 6, 7];
let res = [...arr1, ...arr2].sort((a, b) => a - b);

let ans = (res[res.length / 2 - 1] + res[res.length / 2]) / 2;

console.log(ans);

//g> Remove duplicates from an array
let dupArr = [1, 3, 8, 6, 9, 0, 5, 7, 0, 4, 10, 6];
let result = [];
dupArr = dupArr.sort((a, b) => a - b);

for (let i = 0; i < dupArr.length; i++) {
  if (dupArr[i] !== dupArr[i + 1]) {
    result.push(dupArr[i]);
  }
}

console.log(result);

//h> Rotate an array by k times
let k = 2;

for (let i = 0; i < k; i++) {
  let last = arr[arr.length - 1];

  for (let j = arr.length - 1; j > 0; j--) {
    arr[j] = arr[j - 1];
  }
  arr[0] = last;
}

console.log(arr);
