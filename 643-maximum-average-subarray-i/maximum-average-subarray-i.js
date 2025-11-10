/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxSum = 0;
    let windowSize = 0;

    for(let i=0; i< k; i++){
        windowSize += nums[i];
    }

    maxSum = windowSize;

    for(let i=k; i<nums.length; i++){
        windowSize += nums[i] - nums[i-k];
        maxSum = Math.max(maxSum, windowSize);
    }
    return maxSum/k;
};