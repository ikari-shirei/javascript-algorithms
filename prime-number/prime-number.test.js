const isPrime = require('./prime-number')

test('3 is a prime number', () => {
  expect(isPrime(3)).toBe(true)
})

test('5 is a prime number', () => {
  expect(isPrime(5)).toBe(true)
})

test('4 is not a prime number', () => {
  expect(isPrime(4)).toBe(false)
})

test('1 is not a prime number', () => {
  expect(isPrime(1)).toBe(false)
})

test('1450 is not a prime number', () => {
  expect(isPrime(1450)).toBe(false)
})
