const factorial = require('./factorial')

test('0! should be 1', () => {
  expect(factorial(0)).toBe(1)
})

test('1! should be 1', () => {
  expect(factorial(1)).toBe(1)
})

test('2! should be 2', () => {
  expect(factorial(2)).toBe(2)
})

test('9! should be 720', () => {
  expect(factorial(9)).toBe(362880)
})

test('11! should be 39916800', () => {
  expect(factorial(11)).toBe(39916800)
})

test('18! should be 6402373705728000', () => {
  expect(factorial(18)).toBe(6402373705728000)
})
