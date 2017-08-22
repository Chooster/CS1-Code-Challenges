/**
* Longest Run
* Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run.
* If there are two runs of equal length, return the first one. Return [0,0] for no runs.
* Examples:
* Input: "abbbcc"	Output: [ 1, 3 ]
* Input: "mississippi" Output: [ 2, 3 ]
* Input: "abcdefgh" Output: [ 0, 0 ]
* Input: "aabbbcccc" Output: [ 5, 4 ]
*/

const longestRun = (str) => {
  let arr = [0, 0];
  let temp = [0, 0];
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      temp[1] = i;
      if (temp[1] - temp[0] > arr[1] - arr[0]) arr = temp;
    }
    else temp = [i, i];
  }
  return arr;
};
