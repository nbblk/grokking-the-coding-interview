// Problem: Given an array of positive numbers and a positive number âk,â find the maximum sum of any contiguous subarray of size âkâ.
function maximum_sum_subarray(arr, k) {
	const result = [];
	let windowStart = 0,
		windowSum = 0;
	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
		windowSum += arr[windowEnd];
		if (windowEnd >= k - 1) {
			result.push(windowSum);
			windowSum -= arr[windowStart];
			windowStart++;
		}
	}

	return Math.max(...result);
}

console.log(maximum_sum_subarray([2, 1, 5, 1, 3, 2], 3));
console.log(maximum_sum_subarray([2, 3, 4, 1, 5], 2));

// Time complexity: O(N)
// Space complexity: O(1)
