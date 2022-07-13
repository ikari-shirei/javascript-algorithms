/* Alternative answer */

function alternativeIsPowerOfTwo(n) {
  if (n < 1) {
    return false
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false
    }

    n = n / 2
  }

  return true
}

// Big-O O(logn)
// Input and complexity increases, but not by the same amount

module.exports = alternativeIsPowerOfTwo
