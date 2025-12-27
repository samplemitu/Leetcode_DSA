/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let seen = new Set();

    for(let ch of nums){
        if(seen.has(ch)) return true;
        seen.add(ch);
    }

    return false;
};