/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const result = [];

  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      // Already visited → duplicate
      result.push(index + 1);
    } else {
      // Mark as visited
      nums[index] = -nums[index];
    }
  }

  return result;
};