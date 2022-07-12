/* Integers larger than the square root do not need to be checked because, whenever 
'n=a*b', one of the factors 'a' and 'b' is less than or equal to the square root of 'n' */

// Alternative answer

function isPrimeOptimized(num) {
  if (num < 2) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

// Big-O O(sqrt(n))

module.exports = isPrimeOptimized
