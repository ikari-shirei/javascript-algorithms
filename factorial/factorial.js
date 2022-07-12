/* Problem: Give an integer 'n', find the factorial of that integer. */
/* In mathematics, the factorial of a non-negative integer 'n',
denoted n!, is the product of all positive integers less than or equal to 'n'. */

/* Initial answer */

function factorial(n) {
  if (n === 0) {
    return 1
  }

  let sum = 1

  for (let i = 1; i <= n; i++) {
    sum *= i
  }

  return sum
}

// Big-O O(n)

module.exports = factorial
