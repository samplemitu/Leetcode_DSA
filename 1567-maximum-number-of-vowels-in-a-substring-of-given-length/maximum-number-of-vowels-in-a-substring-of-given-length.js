/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    let maxCount = 0;

    // Initial window
    for (let i = 0; i < k; i++) {
        if (vowelSet.has(s[i])) count++;
    }
    maxCount = count;

    // Slide the window
    for (let i = k; i < s.length; i++) {
        if (vowelSet.has(s[i])) count++;
        if (vowelSet.has(s[i - k])) count--;
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;

}