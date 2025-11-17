/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    // Sort by difference: (costA - costB)
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));

    let n = costs.length / 2;
    let total = 0;

    // First half -> send to City A
    for (let i = 0; i < n; i++) {
        total += costs[i][0];
    }

    // Second half -> send to City B
    for (let i = n; i < 2 * n; i++) {
        total += costs[i][1];
    }

    return total;
};
