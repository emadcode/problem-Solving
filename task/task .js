//array = [[1,2,3],
//[8,9,4],
//[7,6,5]]
//snail(array) #=> [1,2,3,4,5,6,7,8,9]

///array = [[1,2,3],
//[4,5,6],
//[7,8,9]]
//snail(array) #=> [1,2,3,6,9,8,7,4,5]


function snail(array) {
    const result = [];
    let top = 0, bottom = array.length - 1, left = 0, right = array[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse top row
        for (let i = left; i <= right; i++) {
            result.push(array[top][i]);
        }
        top++;

        // Traverse right column
        for (let i = top; i <= bottom; i++) {
            result.push(array[i][right]);
        }
        right--;

        // Traverse bottom row
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(array[bottom][i]);
            }
            bottom--;
        }

        // Traverse left column
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(array[i][left]);
            }
            left++;
        }
    }

    return result;
}

// Test cases
const array1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(snail(array1)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

const array2 = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
];
console.log(snail(array2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
///(9) [1, 2, 3, 6, 9, 8, 7, 4, 5]
// (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
