/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let result = '';
  let i = 0;
  while (i < str.length) {
    while (str[i] === str[i + 1]) {
      count++;
      i++;
    }
    result += count > 1 ? `${count}${str[i]}` : str[i];
    i++;
    count = 1;
  }
  return result;
}

module.exports = encodeLine;
