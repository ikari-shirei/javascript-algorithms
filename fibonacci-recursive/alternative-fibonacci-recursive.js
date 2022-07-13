// Alternative answer

function alternativeFibonacciRecursive(n) {
  if (n < 2) {
    return n
  }

  return (
    alternativeFibonacciRecursive(n - 1) + alternativeFibonacciRecursive(n - 2)
  )
}

module.exports = alternativeFibonacciRecursive
