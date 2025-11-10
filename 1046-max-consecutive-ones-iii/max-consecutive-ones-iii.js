/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let maxCount = 0;
    let zerocount = 0;

    for(let i=0; i<nums.length; i++){
        if(nums[i] === 0){
          zerocount++;
        }

        while(zerocount > k){
            if(nums[left] === 0){
                zerocount--;
            }
            left++;
        }
        maxCount = Math.max(maxCount, i - left + 1);
    }
    return maxCount;
};