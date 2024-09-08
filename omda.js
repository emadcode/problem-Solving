function add(n) {
    const sum = (next) => add(n + next);

    sum.valueOf = () => n;

    return sum;
}

// Test cases
console.log(add(1)(2));          // 3
console.log(add(1)(2)(3));       // 6
console.log(add(1)(2)(3)(4));    // 10
console.log(add(1)(2)(3)(4)(5)); // 15

// Store and reuse
var addTwo = add(2);
console.log(addTwo);             // 2
console.log(addTwo + 5);         // 7
console.log(addTwo(3));          // 5
console.log(addTwo(3)(5));       // 10
