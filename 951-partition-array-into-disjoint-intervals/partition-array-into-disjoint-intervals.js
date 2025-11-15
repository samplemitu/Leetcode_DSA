/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
    let maxLeft = nums[0];   // Maximum value in the left partition
    let maxSoFar = nums[0];  // Maximum seen so far while scanning
    let partitionIndex = 0;  // Final index of left partition

    for (let i = 1; i < nums.length; i++) {
        maxSoFar = Math.max(maxSoFar, nums[i]);

        // If nums[i] is smaller than maxLeft,
        // it cannot stay in right partition.
        if (nums[i] < maxLeft) {
            partitionIndex = i;   // Expand left boundary
            maxLeft = maxSoFar;   // Update maxLeft to newest max
        }
    }

    return partitionIndex + 1; // Length of left partition
};