/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
     if (original.length !== m * n) return [];

  const result = [];
  let index = 0;

  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(original[index]);
      index++;
    }
    result.push(row);
  }

  return result;
};