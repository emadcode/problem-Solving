    function secondLargest(arr) {
        if (arr.length < 2) return null;
        
        let first = -Infinity;
        let second = -Infinity;
        
        for (let num of arr) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num < first) {
                second = num;
            }
        }
        
        return second === -Infinity ? null : second;
    }
