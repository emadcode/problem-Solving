

// all loops in java scipt
//    for loop
//while loop
//do-while loop
//for...of loop (for iterating over iterable objects like arrays)
//for...in loop (for iterating over object properties)


// for loop
console.log("For loop:");
for (let i = 0; i < 5; i++) {
    console.log("Iteration (for): " + i);
}

// while loop
console.log("\nWhile loop:");
let j = 0;
while (j < 5) {
    console.log("Iteration (while): " + j);
    j++;
}

// do-while loop
console.log("\nDo-while loop:");
let k = 0;
do {
    console.log("Iteration (do-while): " + k);
    k++;
} while (k < 5);

// for...of loop (for iterating over iterable objects like arrays)
console.log("\nFor...of loop:");
const array = [1, 2, 3, 4, 5];
for (const element of array) {
    console.log("Element (for...of): " + element);
}

// for...in loop (for iterating over object properties)
console.log("\nFor...in loop:");
const obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
    console.log("Property (for...in): " + key + ", Value: " + obj[key]);
}
