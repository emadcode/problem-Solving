function longestIncreasingSubsequence(arr) {
    if (arr.length === 0) return 0;
    
    const dp = new Array(arr.length).fill(1);
    
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp);
}

console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18])); // 4
console.log(longestIncreasingSubsequence([0, 1, 0, 3, 8, 3])); // 4
console.log(longestIncreasingSubsequence([7, 7, 7, 7, 7, 7, 7])); // 1
