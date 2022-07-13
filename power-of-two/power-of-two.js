/* Problem: Give a positive integer 'n', determine if the number is a power of 2 or not. */

/* Initial answer */

function isPowerOfTwo(n) {
  const powersOfTwo = []

  for (let i = 0; i < n; i++) {
    powersOfTwo.push(Math.pow(2, i))
  }

  return powersOfTwo.includes(n)
}

// Not so efficient

module.exports = isPowerOfTwo
