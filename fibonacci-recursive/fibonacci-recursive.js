/* Problem: Give a number 'n', find the  nth element of the Fibonacci sequence. */

// Initial answer

function fibonacciRecursive(n) {
  if (n === 1) {
    return 1
  }
  if (n === 0) {
    return 0
  }

  const fib = [0, 1]

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }

  return fib.slice(-2).reduce((x, y) => x + y)
}

// Not even recursive

module.exports = fibonacciRecursive
