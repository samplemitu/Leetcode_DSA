/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let count = 0;
    let maxCount = 0;

    for(let i=0; i<k; i++){
      count += arr[i];
    }

     if(count / k >= threshold){
        maxCount++;
     }

    for(let i=k; i< arr.length; i++){
        // count = arr[i] - arr[i-k];
        count = count - arr[i - k] + arr[i];
        if(count / k >= threshold){
            maxCount++;
        }
    }
    return maxCount;
};