/**
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
function sum(a, b) {
  return a + b;
  // TODO: Implement this function.
}

/**
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
   let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; 
  }
  return reversed;
  // TODO: Implement this function.
}

/**
 * @param {number[]} numbers An array of numbers.
 * @returns {number} The largest number in the array. Return null if the array is empty.
 */
function findLargest(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let largest = numbers[0];
  for (let num of numbers) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
  // TODO: Implement this function.
}

/**
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * The check should be case-insensitive.
 */
function isPalindrome(str) {
    let lower = str.toLowerCase();  
  let reversed = "";

  for (let i = lower.length - 1; i >= 0; i--) {
    reversed += lower[i];
  }

  return lower === reversed;
  // TODO: Implement this function.
}

/**
 * @param {number[]} numbers An array of numbers.
 * @returns {number[]} A new array containing only the even numbers from the original array.
 */
function filterEvenNumbers(numbers) {
  let result = [];

  for (let num of numbers) {
    if (num % 2 === 0) {
      result.push(num); // نضيف الأعداد الزوجية فقط
    }
  }

  return result;
  // TODO: Implement this function.
}


// Do not edit the line below.
module.exports = {
  sum,
  reverseString,
  findLargest,
  isPalindrome,
  filterEvenNumbers,
};

