/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < nums[mid + 1]) {
      // Increasing slope → peak on the right
      left = mid + 1;
    } else {
      // Decreasing slope or peak → peak on the left
      right = mid;
    }
  }

  return left; // left === right
};