/* Problem: Give a number 'n', find the first 'n' elements of the Fibonacci sequence */
/* In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones. */

/* Initial answer */

function fib(n) {
  if (n === 1) {
    return 1
  }
  if (n === 0) {
    return 0
  }

  const arr = [0, 1]

  for (let i = 2; i < n; i++) {
    const targetNumbers = arr.slice(-2)
    arr.push(Number(targetNumbers[0]) + Number(targetNumbers[1]))
  }

  return arr
}

console.log(fib(0), 'answer 1')
console.log(fib(1), 'answer 1')
console.log(fib(2), 'answer 1')
console.log(fib(7), 'answer 1')
console.log(fib(8), 'answer 1')

/* Alternative answer */

function fibonacci(n) {
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

  return fib
}

// Big-o O(n)

console.log(fibonacci(0), 'answer 2')
console.log(fibonacci(1), 'answer 2')
console.log(fibonacci(2), 'answer 2')
console.log(fibonacci(7), 'answer 2')
console.log(fibonacci(8), 'answer 2')
