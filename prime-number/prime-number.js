/* Problem: Give a natural number 'n', determine if the number is prime or not. */
/* A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. */

// Initial answer

function isPrime(num) {
  if (num <= 1) {
    return false
  }

  for (let i = 2; i < num; i++) {
    if ((num / i) % 1 === 0) {
      return false
    }
  }

  return true
}

// Big-O O(n)

module.exports = isPrime
