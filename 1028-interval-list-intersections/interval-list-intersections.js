/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    const result = [];
    let i = 0, j = 0;

    while (i < firstList.length && j < secondList.length) {
        const [start1, end1] = firstList[i];
        const [start2, end2] = secondList[j];

        // Check if intervals overlap
        if (end1 >= start2 && end2 >= start1) {
            // Overlapping interval
            result.push([Math.max(start1, start2), Math.min(end1, end2)]);
        }

        // Move the pointer that has the smaller end
        if (end1 < end2) {
            i++;
        } else {
            j++;
        }
    }

    return result;
};
