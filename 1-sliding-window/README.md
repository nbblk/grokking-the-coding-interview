### 1. Problem
> Given an array, find the average of each subarray of ‘K’ contiguous elements in it.

### 2. Brute force approach
```
function find_averages_of_subarrays(K, arr) {
    const result = [];
    for (let i = 0; i < arr.length - K + 1; i++) {
        let sum = 0.0;
        for (let j = i; j < i + K; j++) {
            sum += arr[j];
        }
        result.push(sum / K);
    }

    return result;
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);

```

Time efficiency: O(N + K) 

### 3. A better approach 

[1,3,2,6,-1,4,1,8,2]
[x x x x x] 
  [x x x x x]
    [x x x x x] ....

There are four overlapping elements and the more efficient way to reuse the overlapping part is to "slide the window" by one element while moving on to the next subarray. That means we just need to subtract the element that is out of the window when we move the sliding part. By that approach the time complexity will reduce to O(N)!

```
function find_averages_of_subarray(K, arr) {
    const result = [];
    let windowSum = 0.0, windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        if (windowEnd >= K - 1) { // when it's time to move window
            result.push(windowSum / K); // average the sum and push
            windowSum -= arr[windowStart]; // subtract the first element of the window
            windowStart += 1; // move the window to the right
        }
    }

    return result;
}
```

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);
