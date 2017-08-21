/*
 * Create the function fizzBuzz that takes a single integer as an argument.
 * Return 'fizz' if num is divisible by 3 with no remainder.
 * Return 'buzz' if num is divisible by 5 with no remainder.
 * Return 'fizzbuzz' if num is divisible by both 3 and 5 with no remainder.
 * If the number is not divisible by either 3 or 5 then return the number given as the argument.
 * Before you write your function write automated tests to test this function.
 * The main focus of this challenge is the testing aspect of it.
 */
const assert = require('chai').assert;

const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  else if (num % 3 === 0) return 'fizz';
  else if (num % 5 === 0) return 'buzz';
  return num;
};

const fizzBuzzTest = () => {
  const fizzbuzz = fizzBuzz(15) === 'fizzbuzz' ? true : false;
  const fizz = fizzBuzz(9) === 'fizz' ? true : false;
  const buzz = fizzBuzz(10) === 'buzz' ? true : false;
  const num = fizzBuzz(7) === 7 ? true : false;
  return (fizzbuzz && fizz && buzz && num);
};

describe('fizzBuzz(num)', () => {
  it('should be a function', () => {
    assert.typeOf(fizzBuzz, 'function');
  });
  it('fizzBuzz(15) should return `fizzbuzz`', () => {
    assert.equal(fizzBuzz(15), 'fizzbuzz');
  });
  it('fizzBuzz(9) should return `fizz`', () => {
    assert.equal(fizzBuzz(9), 'fizz');
  });
  it('fizzBuzz(10) should return `buzz`', () => {
    assert.equal(fizzBuzz(10), 'buzz');
  });
  it('fizzBuzz(7), should return 7', () => {
    assert.equal(fizzBuzz(7), 7);
  });
