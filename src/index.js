module.exports = function reverse (n) {
  let arr = Array.from(String(Math.abs(n)), Number)
  return arr.reverse().join('')
}


