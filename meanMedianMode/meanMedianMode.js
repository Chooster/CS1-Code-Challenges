/*
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */

const averages = (arr) => {
  const avg = {};
  let sum = 0;
  const mode = {};
  let most = [0, 0];
  arr.forEach((val) => {
    sum += val;
  });
  arr.sort((a, b) => {
    return a - b;
  });
  arr.forEach((val) => {
    if (!mode[val]) mode[val] = 1;
    else mode[val]++;
  });
  Object.keys(mode).forEach((prop) => {
    if (mode[prop] > 1 && mode[prop] > most[1]) {
      most[0] = prop;
      most[1] = mode[prop];
    }
  });
  avg.mean = sum / arr.length;
  avg.median = arr.length % 2 === 0 ? (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2 : arr[Math.floor(arr.length / 2)];
  avg.mode = most[1] > 0 ? parseInt(most[0]) : "No Mode";
  return avg;
};
