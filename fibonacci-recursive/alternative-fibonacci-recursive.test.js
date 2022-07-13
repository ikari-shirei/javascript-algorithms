const alternativeFibonacciRecursive = require('./alternative-fibonacci-recursive')

test('0 should be 0', () => {
  expect(alternativeFibonacciRecursive(0)).toBe(0)
})

test('1 should be 1', () => {
  expect(alternativeFibonacciRecursive(1)).toBe(1)
})

test('6 should be 6', () => {
  expect(alternativeFibonacciRecursive(6)).toBe(8)
})

test('13 should be 233', () => {
  expect(alternativeFibonacciRecursive(13)).toBe(233)
})
