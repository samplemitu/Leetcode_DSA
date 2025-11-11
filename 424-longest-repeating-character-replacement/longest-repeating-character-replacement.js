/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let left = 0;
  let maxFreq = 0;
  let map = new Map();
  let maxOutput = 0;

  for(let i=0; i<s.length; i++){
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    maxFreq = Math.max(...Array.from(map.values()));

    while((i-left+1) - maxFreq > k){
        map.set(s[left], map.get(s[left]) - 1);
        left++;
    }
    maxOutput = Math.max(maxOutput, i - left + 1)

  }  
  return maxOutput;
};