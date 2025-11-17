/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();

    // Count frequency
    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    // Check first unique by looping original string
    for (let i=0; i<s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;       // return the character
        }
    }

    return -1; // no unique char
};
