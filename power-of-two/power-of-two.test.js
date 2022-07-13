const isPowerOfTwo = require('./power-of-two')

test('1 should be true', () => {
  expect(isPowerOfTwo(1)).toBe(true)
})

test('2 should be true', () => {
  expect(isPowerOfTwo(2)).toBe(true)
})

test('5 should be false', () => {
  expect(isPowerOfTwo(5)).toBe(false)
})

/* test('67,108,864 should be true', () => {
  expect(isPowerOfTwo(67108864)).toBe(true)
}) */
