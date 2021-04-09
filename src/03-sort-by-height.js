/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const nums = [];
  arr.forEach((element) => {
    if (element !== -1) nums.push(element);
  });
  nums.sort((a, b) => a - b);

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i] === -1 ? -1 : nums.shift();
  }
  return result;
}

module.exports = sortByHeight;
