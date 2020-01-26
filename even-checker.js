let evencursion = function(num) {
  if (num < 0) {return evencursion(Math.abs(num))}
  if (num === 1) {return false}
  if (num === 0) {return true}
  return evencursion(num - 2)
}