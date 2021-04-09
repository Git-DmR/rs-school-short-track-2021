/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numbers = n.toString().split('');
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    let item = n.toString().split('');
    item.splice(i, 1);
    item = item.join('');
    result.push(parseInt(item, 10));
  }
  return Math.max.apply(null, result);
}

module.exports = deleteDigit;
