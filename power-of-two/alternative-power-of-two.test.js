const alternativeIsPowerOfTwo = require('./alternative-power-of-two')

test('1 should be true', () => {
  expect(alternativeIsPowerOfTwo(1)).toBe(true)
})

test('2 should be true', () => {
  expect(alternativeIsPowerOfTwo(2)).toBe(true)
})

test('5 should be false', () => {
  expect(alternativeIsPowerOfTwo(5)).toBe(false)
})

test('67,108,864 should be true', () => {
  expect(alternativeIsPowerOfTwo(67108864)).toBe(true)
})
