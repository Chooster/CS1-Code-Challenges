/*
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */

const vowelCount = (str) => {
  str = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) total++;
  }
  return total;
};
