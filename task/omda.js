//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 

function moveZeros(arr) {
    // Filter out non-zero elements and store them in a new array
    let nonZeros = arr.filter(el => el !== 0);
    
    // Count the number of zeros in the original array
    let zerosCount = arr.length - nonZeros.length;
    
    // Create an array of zeros with the same count as zeros in the original array
    let zeros = Array(zerosCount).fill(0);
    
    // Concatenate the non-zero elements with the zeros
    return nonZeros.concat(zeros);
}

// Example usage:
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); 
// Output: [false, 1, 1, 2, 1, 3, "a", 0, 0]
