const fibonacciRecursive = require('./fibonacci-recursive')

test('0 should be 0', () => {
  expect(fibonacciRecursive(0)).toBe(0)
})

test('1 should be 1', () => {
  expect(fibonacciRecursive(1)).toBe(1)
})

test('6 should be 6', () => {
  expect(fibonacciRecursive(6)).toBe(8)
})

test('13 should be 233', () => {
  expect(fibonacciRecursive(13)).toBe(233)
})
