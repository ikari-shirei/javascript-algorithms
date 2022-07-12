const isPrimeOptimized = require('./o-prime-number')

test('3 is a prime number', () => {
  expect(isPrimeOptimized(3)).toBe(true)
})

test('5 is a prime number', () => {
  expect(isPrimeOptimized(5)).toBe(true)
})

test('4 is not a prime number', () => {
  expect(isPrimeOptimized(4)).toBe(false)
})

test('1 is not a prime number', () => {
  expect(isPrimeOptimized(1)).toBe(false)
})

test('1450 is not a prime number', () => {
  expect(isPrimeOptimized(1450)).toBe(false)
})
